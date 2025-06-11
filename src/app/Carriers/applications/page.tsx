"use client";

import type React from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FileText, Globe, Linkedin, Mail, Phone, User } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { Suspense } from "react";
export default function Navbar_1() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Who are We",
      link: "#about",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Carriers",
      link: "#Carriers",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Suspense>
      <div className="dark bg-black relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Book a call</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <ApplicationForm />
        {/* footer */}
        <Footer />
        {/* Navbar */}
      </div>
    </Suspense>
  );
}

function ApplicationForm() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    jobId: id || "", // make sure it's not null
    fullName: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
  });

  useEffect(() => {
    if (id) {
      setFormData((prev) => ({ ...prev, jobId: id }));
    } else {
      console.warn("No job ID provided in URL.");
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Application submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Check console.");
    }
  };

  return (
    <div className="dark min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Job Application
          </h1>
          <p className="text-neutral-300">
            Please fill out all fields to submit your application
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Application Form
            </CardTitle>
            <CardDescription>
              Submit your information and we&apos;ll review your application
              within 2-3 business days.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-300">
                  Personal Information
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="newuser@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Application Materials */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-300">
                  Application Materials
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="resumeUrl">Resume URL *</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="resumeUrl"
                      name="resumeUrl"
                      type="url"
                      placeholder="https://example.com/resume.pdf"
                      value={formData.resumeUrl}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Please provide a direct link to your resume (e.g., Google
                    Drive or Dropbox)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder="I am excited to apply for this role..."
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Tell us why you&apos;re interested in this position and what
                    makes you a great fit.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Professional Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-300">
                  Professional Links
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      type="url"
                      placeholder="https://johndoe.dev"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      type="url"
                      placeholder="https://linkedin.com/in/johndoe"
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Submit Application
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By submitting this application, you agree to our terms and
                conditions.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

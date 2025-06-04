"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Spline from "@splinetool/react-spline";
import ScrollVelocity from "../../TextAnimations/ScrollVelocity/ScrollVelocity";
import { BentoGridSecondDemo } from "@/components/ui/bento-content";
import { Footer } from "@/components/ui/footer";
import { ProjectShowcase } from "@/components/ui/projects";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Briefcase,
  Heart,
  Users,
  TrendingUp,
  Coffee,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Shield,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Build scalable systems and lead technical initiatives in our growing engineering team.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York / Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Drive product strategy and work closely with engineering and design teams.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Create beautiful, intuitive user experiences that delight our customers.",
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Chicago / Remote",
    type: "Full-time",
    experience: "1+ years",
    description:
      "Generate new business opportunities and build relationships with potential clients.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Develop and execute marketing campaigns to drive brand awareness and growth.",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote / Austin",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Turn data into actionable insights to drive business decisions and growth.",
  },
];

export default function NavbarDemo() {
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
      link: "#carriers",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
      <CareersPage />

      {/* Navbar */}
    </div>
  );
}

export function CareersPage() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
          >
            We're Hiring
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build the Future with{" "}
            <span className="text-[#fefc58]">Quarlatis</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join our mission to revolutionize the industry. We're looking for
            passionate, innovative people who want to make a real impact while
            growing their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-[#ebff54] hover:bg-[#c2d536]"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:text-white"
            >
              Learn About Our Culture
            </Button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fefc58] mb-2">150+</div>
              <div className="text-neutral-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fefc58] mb-2">12</div>
              <div className="text-neutral-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fefc58] mb-2">4.8★</div>
              <div className="text-neutral-400">Glassdoor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fefc58] mb-2">95%</div>
              <div className="text-neutral-400">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              We believe in creating an environment where everyone can do their
              best work and grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-[#fefc58]" />
                </div>
                <CardTitle className="text-white">People First</CardTitle>
                <CardDescription className="text-neutral-300">
                  We prioritize the well-being and growth of our team members
                  above all else.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Innovation</CardTitle>
                <CardDescription className="text-neutral-300">
                  We encourage creative thinking and aren't afraid to challenge
                  the status quo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Collaboration</CardTitle>
                <CardDescription className="text-neutral-300">
                  We work together across teams and departments to achieve our
                  shared goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Growth Mindset</CardTitle>
                <CardDescription className="text-neutral-300">
                  We embrace challenges as opportunities to learn and improve
                  continuously.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Global Impact</CardTitle>
                <CardDescription className="text-neutral-300">
                  We're building solutions that make a positive difference
                  worldwide.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50 shadow-lg hover:shadow-xl hover:bg-neutral-800/70 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Excellence</CardTitle>
                <CardDescription className="text-neutral-300">
                  We strive for quality in everything we do and take pride in
                  our work.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-neutral-300">
              We offer comprehensive benefits and perks to support your personal
              and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[#fefc58]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Health & Wellness
                </h3>
                <p className="text-neutral-300">
                  Comprehensive health, dental, and vision insurance plus
                  wellness programs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Flexible Schedule
                </h3>
                <p className="text-neutral-300">
                  Work-life balance with flexible hours and unlimited PTO
                  policy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Remote First</h3>
                <p className="text-neutral-300">
                  Work from anywhere with occasional team gatherings and
                  offsites.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Learning & Development
                </h3>
                <p className="text-neutral-300">
                  $2,000 annual learning budget plus conference attendance
                  support.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Competitive Compensation
                </h3>
                <p className="text-neutral-300">
                  Market-leading salaries plus equity participation in company
                  growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Coffee className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Great Perks</h3>
                <p className="text-neutral-300">
                  Home office setup, team lunches, and fun company events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-neutral-300">
              Find your next opportunity and join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800/70 hover:shadow-lg transition-all cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {job.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-700 text-neutral-200 hover:bg-neutral-600"
                        >
                          {job.department}
                        </Badge>
                      </div>
                      <p className="text-neutral-300 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="bg-[#ebff54] hover:bg-[#c2d536]">
                        Apply Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-300 mb-4">
              Don't see a role that fits? We're always looking for great people.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:text-white"
            >
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-neutral-300">
              Hear from the people who make Quarlatis an amazing place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-neutral-700 bg-neutral-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#ebff54] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Johnson</h4>
                    <p className="text-sm text-neutral-400">Senior Engineer</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  "The learning opportunities here are incredible. I've grown
                  more in my first year at Quarlatis than in my previous three
                  years combined."
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    MC
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Mike Chen</h4>
                    <p className="text-sm text-neutral-400">Product Manager</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  "The collaborative culture here is amazing. Everyone is
                  willing to help and share knowledge. It feels like we're all
                  working toward the same goal."
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-700 bg-neutral-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    AR
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alex Rodriguez</h4>
                    <p className="text-sm text-neutral-400">UX Designer</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  "The work-life balance is fantastic. I can be productive while
                  still having time for my family and personal interests."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 ">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-neutral-300">
              We've designed our process to be transparent, efficient, and
              respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebff54] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2 text-white">Application</h3>
              <p className="text-neutral-300 text-sm">
                Submit your application and we'll review it within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebff54] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2 text-white">Phone Screen</h3>
              <p className="text-neutral-300 text-sm">
                30-minute call to discuss your background and the role.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebff54] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2 text-white">Team Interview</h3>
              <p className="text-neutral-300 text-sm">
                Meet with team members and discuss technical/role-specific
                topics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ebff54] rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2 text-white">Final Decision</h3>
              <p className="text-neutral-300 text-sm">
                We'll make a decision and get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

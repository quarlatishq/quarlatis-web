import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="dark bg-dark border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/quarlatis-full.webp"
              alt="logo"
              width={150}
              height={50}
            />
            <p className="text-sm text-muted-foreground">
              Building amazing products with modern technology and exceptional
              user experiences.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New Delhi,India</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@quarlatis.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-300 ">Company</h3>
            <ul className="space-y-2 grid grid-cols-2">
              <div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-300">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button className="w-full">Subscribe</Button>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Follow Us</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 text-neutral-400 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 text-neutral-400 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 text-neutral-400 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 text-neutral-400 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-4 text-neutral-400 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Quarlatis. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
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
import Spline from "@splinetool/react-spline";
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import { BentoGridSecondDemo } from "@/components/ui/bento-content";
import { Footer } from "@/components/ui/footer";
import { ProjectShowcase } from "@/components/ui/projects";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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
      link: "#Carriers",
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
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "GitFund",
      designation:
        "GitFund is a Web3 platform that connects open-source maintainers and contributors through issue-based bounties. Maintainers list funded GitHub issues, and contributors earn crypto by solving them—bridging on-chain incentives with real developer collaboration.",
      src: "/screen-white.webp",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/ecommerce-dashboard",
    },
  ];
  return (
    <>
      <div
        className={`lg:mt-40 mt-10 block lg:flex mx-auto max-w-7xl lg:p-0 p-10`}
      >
        <div className="pr-10 lg:w-1/2">
          <h1 className="flex-1 text-5xl font-bold text-[#ebff54]">
            Building BlockChain
          </h1>
          <h2 className="flex-1 text-3xl font-semibold text-[#ebff54]">
            One step at a Time
          </h2>
          <p className="text-[14px] pt-5 text-neutral-300">
            From idea to on-chain reality — we specialize in turning ambitious
            concepts into secure, scalable, and user-focused Web3 solutions.
            Whether you're building a decentralized platform, launching an NFT
            project, or creating smart contract infrastructure, we help
            forward-thinking teams and communities bring their vision to life on
            the blockchain.
          </p>
          <button className="bg-[#ebff54] text-black px-6 py-3 rounded-md mt-5">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 lg:p-0 p-10">
          <Spline scene="https://prod.spline.design/f8dOk9XFLmsIsVMC/scene.splinecode" />
        </div>
      </div>
      <div className="pt-20 justify-center">
        <ScrollVelocity
          texts={[
            "Decentralized Future Web3 Revolution",
            "Own Your Data Smart Contracts",
          ]}
          velocity={100}
          className="custom-scroll-text text-white text-5xl"
        />
      </div>
      <div id="about" className="pt-20 mx-auto justify-center max-w-5xl">
        <h2 className="text-4xl text-[#ebff54] font-semibold">About Us</h2>
        <p className="text-justify text-lg text-neutral-100 pt-5">
          At Quarlatis, we’re reimagining how the internet works—one
          decentralized solution at a time. We are a Web3-native product studio
          focused on building scalable, secure, and meaningful blockchain
          applications that empower users and communities. Whether it's a
          full-stack dApp, a token-powered ecosystem, or a DAO infrastructure,
          we take ideas from whiteboard to mainnet. With a team of blockchain
          engineers, designers, and strategists, we bring together technical
          excellence and product insight to help you launch fast and grow
          confidently.
        </p>
      </div>
      <div className="pt-10 mx-auto justify-center">
        <BentoGridSecondDemo />
      </div>

      <div id="projects" className="pt-20 mx-auto justify-center max-w-5xl">
        <h2 className="text-4xl text-[#ebff54] font-semibold">Our Projects</h2>
        <p className="text-justify text-lg text-neutral-100 pt-5">
          Our Projects At Quarlatis, our projects reflect our vision: building
          purposeful and scalable Web3 products that solve real-world problems.
          From decentralized finance and DAO governance to NFT infrastructure
          and cross-chain solutions, we specialize in turning complex blockchain
          concepts into production-ready applications. Each project is crafted
          with a focus on security, usability, and long-term impact—whether
          we're launching a smart contract protocol, architecting tokenomics, or
          integrating blockchain into enterprise workflows. We don’t just build
          for the hype—we build for the future.
        </p>
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>

      {`Footer`}
      <div>
        <Footer />
      </div>
    </>
  );
};

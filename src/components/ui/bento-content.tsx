import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Spline from "@splinetool/react-spline";
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => (
  <Spline scene="https://prod.spline.design/q9ylmiffsRJ0Yt07/scene.splinecode" />
);

const SkeletonTwo = () => (
  <Spline scene="https://prod.spline.design/GQXNl7JxzvnQG6CG/scene.splinecode" />
);

const SkeletonThree = () => (
  <Spline scene="https://prod.spline.design/CX05Z3l-fiM1nj1G/scene.splinecode" />
);

const SkeletonFour = () => (
  <>
    <div className="h-40">
      <Spline scene="https://prod.spline.design/tKl60NZICCiY6Ndy/scene.splinecode" />
    </div>
  </>
);

const items = [
  {
    title: " Custom Web3 Development",
    description:
      "We craft end-to-end decentralized applications tailored to your use case, ensuring secure, gas-optimized, and future-ready deployments.",
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scalable Blockchain Solutions",
    description:
      "Our infrastructure is engineered to scale with your community—whether you're launching a DAO, NFT ecosystem, or DeFi protocol.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Product Strategy & Design",
    description:
      "We align technical development with UX/UI best practices to deliver intuitive, meaningful Web3 experiences that users actually love.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Contract Auditing & Security",
    description:
      "We perform rigorous audits and implement security best practices to ensure your smart contracts are safe from vulnerabilities, exploits, and protocol risks—protecting users and preserving trust.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

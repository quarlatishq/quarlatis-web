import type React from "react";
export const metadata = {
  title: "Contact Us | Building BlockChain",
  description:
    "Get in touch with our blockchain development team to discuss your Web3 project needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

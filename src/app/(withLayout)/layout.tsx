import type { Metadata } from "next";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

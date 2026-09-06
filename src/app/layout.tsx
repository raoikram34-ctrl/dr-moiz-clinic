import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// Updated import paths based on your new folder structure
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans-serif",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Moiz Dental Clinic | Premium Aesthetic & Restorative Dentistry",
  description: "Experience premium, pain-free dental care at Dr. Moiz Dental Clinic in Karachi. Specializing in dental implants, full mouth rehabilitation, and smile makeovers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
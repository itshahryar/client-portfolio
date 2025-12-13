import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hamna Fatima – Graphic Designer Portfolio",
  description: "Portfolio of Hamna Fatima, a versatile graphic designer specializing in branding, visual identity, and creative design solutions.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "ProfileX",
    title: "ProfileX – React & Next.js Portfolio Template for Designers, Developers & Creatives",
    description: "A modern React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness.",
    url: "https://themixly.com/preview/2067/portfolio-react-nextjs-template/",
    images: "https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProfileX – React & Next.js Portfolio Template for Designers, Developers & Creatives",
    description: "A modern React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness.",
    url: "https://themixly.com/preview/2067/portfolio-react-nextjs-template/",
    images: "https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}

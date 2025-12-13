import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services – Hamna Fatima | Graphic Designer",
  description: "Graphic design services including branding, logo design, print design, illustration, and more.",
};

export default function Services() {

  const services = [
    {
      title: "Brand Identity Design",
      description: "Creating memorable brand identities that reflect your company's values and resonate with your target audience.",
      icon: "🎨"
    },
    {
      title: "Logo Design",
      description: "Custom logo designs that capture the essence of your brand and make a lasting impression.",
      icon: "✨"
    },
    {
      title: "Print Design",
      description: "Brochures, business cards, flyers, and other print materials that bring your message to life.",
      icon: "📄"
    },
    {
      title: "Illustration",
      description: "Custom illustrations that add personality and visual appeal to your projects.",
      icon: "🖼️"
    },
    {
      title: "Typography Design",
      description: "Expert typography selection and custom type treatments that enhance readability and style.",
      icon: "🔤"
    },
    {
      title: "Packaging Design",
      description: "Eye-catching packaging designs that stand out on shelves and communicate your brand effectively.",
      icon: "📦"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== SERVICES SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              What I Offer
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              My <span className="font-semibold text-white">Services</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Comprehensive graphic design services to bring your vision to life and help your brand stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:border-white/20 transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 
                       border border-gray-700 rounded-full font-medium hover:bg-gray-200 
                       transition text-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <div className="pb-20"></div>
      <Footer />
    </div>
  );
}


import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Testimonials – Hamna Fatima | Graphic Designer",
  description: "Client testimonials and reviews for graphic designer Hamna Fatima.",
};

export default function Testimonials() {

  const testimonials = [
    {
      quote: "Working with her was a game changer! Hamna understood our vision and brought it to life with incredible creativity and attention to detail.",
      author: "Sarah Johnson",
      role: "CEO, Creative Agency"
    },
    {
      quote: "We increased our brand recognition by 200% after working with Hamna. Her designs perfectly captured our brand identity.",
      author: "Michael Chen",
      role: "Marketing Director"
    },
    {
      quote: "Hamna's logo design exceeded all our expectations. She's professional, creative, and delivers on time. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Founder, Startup Co"
    },
    {
      quote: "The print designs she created for our campaign were absolutely stunning. Our clients couldn't stop talking about them.",
      author: "David Thompson",
      role: "Brand Manager"
    },
    {
      quote: "Hamna has an incredible eye for detail and typography. She transformed our brand identity completely.",
      author: "Lisa Anderson",
      role: "Creative Director"
    },
    {
      quote: "Her illustration work is outstanding. She brought our story to life in ways we never imagined possible.",
      author: "James Wilson",
      role: "Product Manager"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              Client Reviews
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Client <span className="font-semibold text-white">Testimonials</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              What my clients have to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md flex flex-col h-full"
              >
                <p className="text-white mb-auto flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-auto pt-4">
                  <div className="text-sm font-semibold text-white">{testimonial.author}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 
                       border border-gray-700 rounded-full font-medium hover:bg-gray-200 
                       transition text-sm"
            >
              Work With Me
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


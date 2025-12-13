import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Education – Hamna Fatima | Graphic Designer",
  description: "Education background of graphic designer Hamna Fatima.",
};

export default function Education() {
  const education = [
    {
      degree: "Graduation in English Literature and Linguistics",
      institution: "NUML Islamabad",
      period: "2020-2024",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "MS Linguistics",
      institution: "COMSATS University Islamabad",
      period: "2025 - ongoing",
      current: true,
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];


  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== EDUCATION SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              Academic Background
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Education
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              My educational journey in English Literature, Linguistics, and Graphic Design.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-400">
                        {edu.period}
                        {edu.current && <span className="ml-2 text-green-400">● Current</span>}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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


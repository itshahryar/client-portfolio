import { Code, Palette, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Skills – Hamna Fatima | Graphic Designer",
  description: "Skills and expertise of graphic designer Hamna Fatima.",
};

export default function Skills() {
  const skills = {
    "Business Skills": [
      "Sales",
      "Lead generation",
      "Social media management"
    ],
    "Graphic Design": [
      "PPT design",
      "Social media posts",
      "Flyers",
      "Ads and posters",
      "YouTube automation"
    ],
    "Technical Skills": [
      "Python",
      "Praat",
      "Figma"
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              My Expertise
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Skills & <span className="font-semibold text-white">Expertise</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              A comprehensive overview of my skills across business, design, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  {category === "Graphic Design" && <Palette className="w-5 h-5" />}
                  {category === "Technical Skills" && <Code className="w-5 h-5" />}
                  {category === "Business Skills" && <Briefcase className="w-5 h-5" />}
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-white/30 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="pb-20"></div>
      <Footer />
    </div>
  );
}


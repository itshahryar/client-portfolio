import { Briefcase } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Experience – Hamna Fatima | Graphic Designer",
  description: "Professional experience of graphic designer Hamna Fatima.",
};

export default function Experience() {
  const experience = [
    {
      role: "Graphic Designer",
      period: "2022 - Present",
      description: "Working as graphic designer since 2022, creating visual content for various clients including PPT designs, social media posts, flyers, ads, posters, and YouTube automation content."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              Professional Journey
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Work <span className="font-semibold text-white">Experience</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              My professional journey and experience in graphic design.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
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


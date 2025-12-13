import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects – Hamna Fatima | Graphic Designer",
  description: "Portfolio of graphic design projects including branding, logo design, print design, and more.",
};

export default function Projects() {
  const workFiles = [
    { name: 'Canadian Tire Corporation Limited.pptx', path: '/work/Canadian Tire Corporation Limited.pptx' },
    { name: 'Health promotion 2.pptx', path: '/work/Health promotion 2.pptx' },
    { name: 'Health promotion.pptx', path: '/work/Health promotion.pptx' },
    { name: 'slides candiceleila.pptx.pptx', path: '/work/slides candiceleila.pptx.pptx' },
    { name: 'The Social Content Company.pptx', path: '/work/The Social Content Company.pptx' },
  ];

  const imageProjects = [
    { src: '/images/project1.png', alt: 'Project 1', title: 'Dashboard Design', category: 'Web Dashboard' },
    { src: '/images/project2.png', alt: 'Project 2', title: 'Logo Design Collection', category: 'Logo Design' },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== PROJECTS SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm text-gray-300 backdrop-blur-md w-fit border border-white/10 mb-4">
              <span className="text-xs">●</span>
              My Work
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-4">
              Featured <span className="font-semibold text-white">Projects</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              A collection of my recent graphic design work spanning branding, print design, and visual identity.
            </p>
          </div>

          {/* Image Projects */}
          {imageProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Design Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {imageProjects.map((project, index) => (
                  <div key={index} className="relative group">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold mb-2">{project.title}</span>
                        <span className="text-gray-300 text-sm">{project.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Files */}
          {workFiles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Presentation Files</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workFiles.map((file, index) => (
                  <a
                    key={index}
                    href={file.path}
                    download
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-4 rounded-lg backdrop-blur-md hover:border-white/20 transition group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-lg">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate group-hover:text-white">
                          {file.name.replace('.pptx', '')}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">PowerPoint</p>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 
                       border border-gray-700 rounded-full font-medium hover:bg-gray-200 
                       transition text-sm"
            >
              Start Your Project
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


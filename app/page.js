"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dna, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

// Define features for the gene analysis app
const features = [
  {
    icon: <Dna className="h-6 w-6 text-emerald-400" />,
    title: "Gene Search",
    description: "Quickly search and retrieve information about any gene of interest."
  },
  {
    icon: <Dna className="h-6 w-6 text-emerald-400" />,
    title: "Analysis Visuals",
    description: "Analyze differentially expressed genes with interactive visualizations."
  },
  {
    icon: <Dna className="h-6 w-6 text-emerald-400" />,
    title: "Tables",
    description: "View, filter, and analyze structured biological data tables."
  }
];

export default function Home() {
  // Add smooth scrolling behavior with offset
  useEffect(() => {
    const handleScrollToSection = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate position with offset (80px from top)
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Add event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScrollToSection);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Bioinformatics made simple
              </Badge> */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                ProteoAging-Oocytes <br />
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md -mt-4 mb-8">
                Analysis of Maternal Age-Associated Proteomic Changes in Oocytes Using Single-Cell Proteomics
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="#features">
                    Explore Features <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/gene-analysis-banner.png"
                alt="Gene analysis visualization"
                fill
                priority
                className="object-cover md:pt-14 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with added padding-top */}
      <section id="features" className="py-20 bg-muted/30 pt-32"> {/* Added pt-32 for more top padding */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" id="features">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore, Visualize, and Analyze gene data effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Work Seamlessly With Data Tables and Visualizations
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  Explore structured data tables and generate clear, interactive
                  visualizations. Stay organized and uncover insights with a smooth,
                  intuitive analysis workflow.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Link href="/gene-analysis">Explore Your Data</Link>
                  </Button>
                </div> */}
              </div>

              {/* Decorative blobs */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}

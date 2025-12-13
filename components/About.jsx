import { memo } from "react";
import Link from "next/link";

/**
 * About Component
 * Displays personal profile information with a photo, bio, skill tags, experience history,
 * and a button to open a contact form popup.
 *
 * @component
 * @returns {JSX.Element} About section UI
 */
function About() {

  const tags = [
    "Branding",
    "Logo Design",
    "Print Design",
    "Illustration",
    "Typography",
    "Adobe Creative Suite",
  ];

  const experiences = [
    ["Graphic Design Intern", "Creative Studio", "2020"],
    ["Freelance Designer", "Various Clients", "2021"],
    ["Junior Graphic Designer", "Brand Agency", "2022"],
    ["Graphic Designer", "Design Studio", "2023"],
    ["Senior Graphic Designer", "Creative Agency", "2024"],
  ];

  return (
    <section
      id="profile"
      className="bg-black text-white px-4 py-8 w-full"
      aria-labelledby="about-heading"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Section - Profile Card */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2 flex flex-col"
          aria-label="Profile Information"
        >
          <div className="relative w-full overflow-hidden rounded-xl h-96">
            <img
              src="/images/client.png"
              alt="Portrait of Hamna Fatima"
              className="rounded-xl w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span
              className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 text-xs rounded-full text-green-400"
              role="status"
              aria-live="polite"
            >
              ● Available for work
            </span>
          </div>
          <h2 id="about-heading" className="mt-6 text-2xl font-semibold">
            Hello, I am <span className="text-gray-300">Hamna Fatima</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Graphic Designer & Creative Professional.
          </p>

          {/* Connect Button */}
          <Link
            href="/contact"
            className="mt-6 inline-block bg-gradient-to-r from-neutral-800 to-black px-6 py-3 border border-gray-700 rounded-full font-medium hover:opacity-90 transition"
          >
            Connect with me
          </Link>
        </article>

        {/* Right Section - Bio, Skills, Experience */}
        <article
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full lg:w-1/2 flex flex-col"
          aria-label="About Hamna Fatima"
        >
          <p className="mb-4 text-gray-300 text-sm">
            I'm Hamna Fatima, a dedicated Graphic Designer specializing in branding,
            visual identity, and creative design solutions. I bring creativity and
            attention to detail to every project, crafting exceptional visual experiences
            that help brands stand out.
          </p>

          {/* Tags - Each in separate row with full width */}
          <div className="flex flex-col w-full gap-2 mt-4" role="list">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="bg-black/50 border border-white/10 text-white text-sm px-3 py-2 rounded-full backdrop-blur-md w-full text-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default memo(About);

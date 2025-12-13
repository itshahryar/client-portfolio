import { Instagram, Linkedin } from "lucide-react";
import { memo } from "react";

function Footer() {
  return (
    <footer
      className="bg-black text-gray-400 py-10 border-t border-white/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
              Hamna<span className="font-semibold text-white">Fatima</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hamna Fatima. All rights reserved.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-5 text-white text-lg">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/hamnah_0101/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Instagram size={20} aria-hidden="true" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hamna-fatima-462792385/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);

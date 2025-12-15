import Link from "next/link";
import { MEDIA } from "@/lib/media";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  sectionIndex?: number;
}

export default function ContactSection({ sectionIndex }: ContactSectionProps) {
  return (
    <section
      id="contact-section"
      data-scroll-section={sectionIndex}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-40"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div
        data-section-content
        data-animate
        className="container mx-auto px-8 py-16 max-w-4xl relative z-10"
      >
        <h2 className="text-6xl font-bold text-white mb-8 text-center max-[1000px]:text-4xl font-aladin">
          Get In Touch
        </h2>
        <p className="text-white/90 text-xl mb-8 text-center max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        
        {/* CTA to Full Contact Page */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all hover:gap-3"
          >
            Visit Our Full Contact Page
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/90">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg text-white text-lg border border-white/30"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg text-white text-lg border border-white/30"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 rounded-lg text-white text-lg resize-none border border-white/30"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-indigo-900 rounded-lg font-bold text-xl hover:bg-white/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6 font-aladin">
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:border-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-indigo-900 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}


import Link from "next/link";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
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
      {/* 40% black overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-secondary-soft to-transparent" />

      <div
        data-section-content
        data-animate
        className="container mx-auto px-8 py-16 max-w-4xl relative z-10"
      >
        <h2 className="text-6xl font-bold mb-8 text-center max-[1000px]:text-4xl font-aladin">
          <ShinyText
            speed={3}
            delay={1}
            color="var(--color-accent)"
            shineColor="var(--color-white)"
            spread={30}
            yoyo
          >
            Get In Touch
          </ShinyText>
        </h2>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-lighter">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        {/* CTA to Full Contact Page */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
          >
            Visit Our Full Contact Page
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="backdrop-blur-sm rounded-xl p-8 border-2 bg-white/10 border-primary-light">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 rounded-lg text-lg resize-none border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6 font-aladin text-lighter">
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:bg-accent hover:border-accent"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 transition-colors text-lighter group-hover:text-background" />
            </a>
          </div>

          {/* CTA to Donate via PayPal */}
          <div className="text-center mt-8">
            <a
              href="https://www.paypal.com/paypalme/teachergamer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
            >
              Support the Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-secondary-soft to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-60 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}

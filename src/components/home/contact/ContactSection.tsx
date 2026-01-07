import Link from "next/link";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";

// Refined Split-Complementary Color Harmony - Magical Fantasy Theme
const theme = {
  primary: {
    base: "#6A4BCF",
    light: "#B9A7FF",
    subtle: "rgba(106, 75, 207, 0.1)",
  },
  accent: {
    lime: "#DAFF0D",
    limeLight: "#E5FF4D",
  },
  highlight: {
    yellow: "#FFD85A",
    yellowSoft: "rgba(255, 216, 90, 0.2)",
  },
  neutral: {
    darkBg: "#1A1A1F",
    lighter: "#E5E4E8",
  },
};

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
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top horizontal transition element */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />

      <div
        data-section-content
        data-animate
        className="container mx-auto px-8 py-16 max-w-4xl relative z-10"
      >
        <h2 className="text-6xl font-bold mb-8 text-center max-[1000px]:text-4xl font-aladin">
          <ShinyText
            speed={3}
            delay={1}
            color={theme.accent.lime}
            shineColor="#fff"
            spread={30}
            yoyo
          >
            Get In Touch
          </ShinyText>
        </h2>
        <p 
          className="text-xl mb-8 text-center max-w-2xl mx-auto"
          style={{ color: theme.neutral.lighter }}
        >
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
        
        {/* CTA to Full Contact Page */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3"
            style={{
              backgroundColor: theme.accent.lime,
              color: theme.neutral.darkBg,
              boxShadow: `0 4px 24px ${theme.accent.limeLight}40`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent.limeLight;
              e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.lime}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent.lime;
              e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.limeLight}40`;
            }}
          >
            Visit Our Full Contact Page
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div 
          className="backdrop-blur-sm rounded-xl p-8 border-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: theme.primary.light
          }}
        >
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10"
                style={{
                  borderColor: theme.primary.light,
                  color: theme.neutral.lighter
                }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10"
                style={{
                  borderColor: theme.primary.light,
                  color: theme.neutral.lighter
                }}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 rounded-lg text-lg resize-none border-2 backdrop-blur-sm bg-white/10"
                style={{
                  borderColor: theme.primary.light,
                  color: theme.neutral.lighter
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full font-bold text-xl transition-all duration-300"
              style={{
                backgroundColor: theme.accent.lime,
                color: theme.neutral.darkBg,
                boxShadow: `0 4px 24px ${theme.accent.limeLight}40`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.limeLight;
                e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.lime}70`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.limeLight}40`;
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 
            className="text-2xl font-bold mb-6 font-aladin"
            style={{ color: theme.neutral.lighter }}
          >
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="Facebook"
            >
              <Facebook 
                className="w-6 h-6 transition-colors"
                style={{ color: theme.neutral.lighter }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 transition-colors" style={{ color: theme.neutral.lighter }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 transition-colors" style={{ color: theme.neutral.lighter }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 transition-colors" style={{ color: theme.neutral.lighter }} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 transition-colors" style={{ color: theme.neutral.lighter }} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: theme.primary.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent.lime;
                e.currentTarget.style.borderColor = theme.accent.lime;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = theme.primary.light;
              }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6 transition-colors" style={{ color: theme.neutral.lighter }} />
            </a>
          </div>
           {/* CTA to Full Contact Page */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all hover:gap-3"
            style={{
              backgroundColor: theme.accent.lime,
              color: theme.neutral.darkBg,
              boxShadow: `0 4px 24px ${theme.accent.limeLight}40`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent.limeLight;
              e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.lime}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent.lime;
              e.currentTarget.style.boxShadow = `0 4px 24px ${theme.accent.limeLight}40`;
            }}
          >
            Donate!  
          </Link>
        </div>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${theme.highlight.yellowSoft}, transparent)`
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-60"
        style={{
          background: `linear-gradient(to right, transparent, ${theme.accent.lime}, ${theme.highlight.yellow}, ${theme.accent.lime}, transparent)`
        }}
      />
    </section>
  );
}

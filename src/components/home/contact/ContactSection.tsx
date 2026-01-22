
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Music } from "lucide-react";

interface ContactSectionProps {
  sectionIndex?: number;
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    hoverBg: "#1877F2",
    hoverShadow: "rgba(24,119,242,0.5)",
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: Twitter,
    hoverBg: "#1DA1F2",
    hoverShadow: "rgba(29,161,242,0.5)",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCuefgI1D0nybe1Vn3Tm1MCg",
    icon: Youtube,
    hoverBg: "#FF0000",
    hoverShadow: "rgba(255,0,0,0.5)",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    hoverBg: "#0A66C2",
    hoverShadow: "rgba(10,102,194,0.5)",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@teachergamerz",
    icon: Music,
    hoverBg: "#FE2C55",
    hoverShadow: "rgba(254,44,85,0.5)",
  },
  {
    name: "Email",
    href: "mailto:contact@example.com",
    icon: Mail,
    hoverBg: "var(--color-accent)",
    hoverShadow: "rgba(218,255,13,0.5)",
    isEmail: true,
  },
];

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
        <p className="text-xl mb-4 text-center max-w-2xl mx-auto text-lighter">
          Have questions or want to connect? Reach out through your preferred social media platform.
        </p>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-lighter/80">
          We're active on all these channels and would love to hear from you!
        </p>

        {/* Social Media Links with Names */}
        <div>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.isEmail ? undefined : "_blank"}
                  rel={social.isEmail ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-4 px-5 py-4 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 bg-white/10 border-primary-light hover:border-transparent"
                  style={{
                    ["--hover-bg" as string]: social.hoverBg,
                    ["--hover-shadow" as string]: social.hoverShadow,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.hoverBg;
                    e.currentTarget.style.borderColor = social.hoverBg;
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.hoverShadow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                  aria-label={social.name}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Icon className={`w-6 h-6 transition-colors text-lighter ${social.isEmail ? "group-hover:text-background" : "group-hover:text-white"}`} />
                  </div>
                  <span className={`font-semibold text-lg transition-colors text-lighter ${social.isEmail ? "group-hover:text-background" : "group-hover:text-white"}`}>
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA to Donate via PayPal */}
        <div className="text-center mt-12">
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

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-secondary-soft to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-60 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}

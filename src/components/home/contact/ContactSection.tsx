
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import { Facebook, Instagram, Linkedin, Youtube, Podcast, Music2, BookOpen, Mail } from "lucide-react";

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

// Official brand colors for social media platforms
const brandColors = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  youtube: "#FF0000",
  x: "#FFFFFF",
  linkedin: "#0A66C2",
  tiktok: "#00F2EA",
  reddit: "#FF4500",
  podbean: "#6FAD0D",
  medium: "#FFFFFF",
  email: "#EA4335",
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
          className="text-xl mb-12 text-center max-w-2xl mx-auto"
          style={{ color: theme.neutral.lighter }}
        >
          Have questions? We'd love to hear from you. Reach out through any of
          our social channels or send us an email.
        </p>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 
            className="text-2xl font-bold mb-6 font-aladin"
            style={{ color: theme.neutral.lighter }}
          >
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/groups/587361488726775/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.facebook
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.facebook;
                e.currentTarget.style.borderColor = brandColors.facebook;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.facebook;
              }}
              aria-label="Facebook"
            >
              <Facebook 
                className="w-6 h-6 transition-colors"
                style={{ color: brandColors.facebook }}
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/teachergamerhandbook/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.instagram
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.instagram;
                e.currentTarget.style.borderColor = brandColors.instagram;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.instagram;
              }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 transition-colors" style={{ color: brandColors.instagram }} />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCuefgI1D0nybe1Vn3Tm1MCg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.youtube
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.youtube;
                e.currentTarget.style.borderColor = brandColors.youtube;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.youtube;
              }}
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 transition-colors" style={{ color: brandColors.youtube }} />
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/TeacherGamerZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.x
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.x;
                e.currentTarget.style.borderColor = brandColors.x;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.x;
              }}
              aria-label="X"
            >
              <svg className="w-6 h-6 transition-colors" style={{ color: brandColors.x }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/the-distinct-self/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.linkedin
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.linkedin;
                e.currentTarget.style.borderColor = brandColors.linkedin;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.linkedin;
              }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 transition-colors" style={{ color: brandColors.linkedin }} />
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@teachergamerz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.tiktok
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.tiktok;
                e.currentTarget.style.borderColor = brandColors.tiktok;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.tiktok;
              }}
              aria-label="TikTok"
            >
              <Music2 className="w-6 h-6 transition-colors" style={{ color: brandColors.tiktok }} />
            </a>
            {/* Reddit */}
            <a
              href="https://www.reddit.com/user/TheTeacherGamer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.reddit
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.reddit;
                e.currentTarget.style.borderColor = brandColors.reddit;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.reddit;
              }}
              aria-label="Reddit"
            >
              <svg className="w-6 h-6 transition-colors" style={{ color: brandColors.reddit }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>
            {/* Podbean */}
            <a
              href="https://teachergamer.podbean.com/page/2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.podbean
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.podbean;
                e.currentTarget.style.borderColor = brandColors.podbean;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.podbean;
              }}
              aria-label="Podcast"
            >
              <Podcast className="w-6 h-6 transition-colors" style={{ color: brandColors.podbean }} />
            </a>
            {/* Medium */}
            <a
              href="https://medium.com/teachergamer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.medium
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.medium;
                e.currentTarget.style.borderColor = brandColors.medium;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.medium;
              }}
              aria-label="Medium"
            >
              <BookOpen className="w-6 h-6 transition-colors" style={{ color: brandColors.medium }} />
            </a>
            {/* Email */}
            <a
              href="mailto:teachergamerhandbook@gmail.com"
              className="group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm border-2 transition-all duration-300 bg-white/10"
              style={{
                borderColor: brandColors.email
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brandColors.email;
                e.currentTarget.style.borderColor = brandColors.email;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = brandColors.email;
              }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6 transition-colors" style={{ color: brandColors.email }} />
            </a>
          </div>

          {/* CTA to Donate via PayPal */}
          <div className="text-center mt-8">
            <a
              href="https://www.paypal.com/paypalme/teachergamer"
              target="_blank"
              rel="noopener noreferrer"
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
              Support the Project
            </a>
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

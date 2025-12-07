interface ContactSectionProps {
  sectionIndex?: number;
}

export default function ContactSection({ sectionIndex }: ContactSectionProps) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="relative w-full min-h-screen flex items-center justify-center bg-[url(/corridor.png)] bg-cover bg-center py-40"
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div
        data-section-content
        className="container mx-auto px-8 py-16 max-w-4xl relative z-10"
      >
        <h2 className="text-6xl font-bold text-white mb-8 text-center max-[1000px]:text-4xl font-aladin">
          Get In Touch
        </h2>
        <p className="text-white/90 text-xl mb-12 text-center max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
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
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
    </section>
  );
}

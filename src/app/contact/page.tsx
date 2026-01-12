"use client";

import {
  ArrowLeftIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
      />
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/home";
              setTimeout(() => {
                const contactSection =
                  document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-accent transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
                Get In Touch
              </h1>

              <p className="text-xl text-lighter leading-relaxed max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and
                we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Form & Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="backdrop-blur-sm rounded-xl p-8 border-2 bg-white/10 border-primary-light">
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-accent/20 border border-accent/30 rounded-lg">
                      <p className="text-accent font-semibold">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        className="w-full px-6 py-4 rounded-lg text-lg border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="w-full px-6 py-4 rounded-lg text-lg resize-none border-2 backdrop-blur-sm bg-white/10 border-primary-light text-lighter placeholder:text-lighter/50 focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar - Social Media */}
              <div className="space-y-8">
                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <h3 className="text-2xl font-bold mb-6 text-lighter text-center">
                    Connect With Us
                  </h3>
                  <div className="flex items-center justify-center gap-6 flex-wrap">
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
                      href="https://www.youtube.com/channel/UCuefgI1D0nybe1Vn3Tm1MCg"
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
                      href="https://www.tiktok.com/@teachergamerz"
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
            </div>

            {/* FAQ Button */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary-light/20 inline-block">
                <h2 className="text-2xl font-bold text-accent mb-4">
                  Have More Questions?
                </h2>
                <p className="text-lighter/80 mb-6 max-w-md">
                  Check out our comprehensive FAQ page for answers to common questions.
                </p>
                <Button
                  size="lg"
                  className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-12 py-4 shadow-[0_4px_24px_rgba(218,255,13,0.25)] hover:shadow-[0_4px_24px_rgba(218,255,13,0.45)]"
                  asChild
                >
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-linear-to-br from-accent/20 to-transparent rounded-xl p-8 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-accent">
                Ready to Transform Your Teaching?
              </h2>
              <p className="text-xl text-lighter/80 max-w-2xl mx-auto">
                Explore our courses and start your journey into game-based
                learning today.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-12 py-6"
                asChild
              >
                <Link href="/home">View Our Courses</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}

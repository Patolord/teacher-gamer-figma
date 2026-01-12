"use client";

import {
  ArrowLeftIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email Us",
    description: "Get in touch via email",
    value: "hello@teachergamer.com",
    link: "mailto:hello@teachergamer.com",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us",
    description: "Come say hello",
    value: "123 Learning St, Education City, EC 12345",
    link: "#",
  },
];


const faqs = [
  {
    question: "What age groups do you work with?",
    answer:
      "We primarily work with students aged 10 and above, though our programs can be adapted for various age ranges depending on the learning objectives.",
  },
  {
    question: "Do I need prior RPG experience?",
    answer:
      "Not at all! Our courses are designed for educators at all levels, from complete beginners to experienced game masters.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course lengths vary from 6-20 weeks depending on the level. Each course is self-paced with cohort-based learning opportunities.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your course.",
  },
];

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-subtle border border-primary-light text-primary-light">
                <MessageSquareIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  We're Here to Help
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-lighter leading-tight">
                Get In Touch
              </h1>

              <p className="text-xl text-lighter/90 leading-relaxed max-w-3xl mx-auto">
                Have questions about our courses or methodology? Want to bring
                game-based learning to your school? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map(
                ({ icon: Icon, title, description, value, link }) => (
                  <a
                    key={title}
                    href={link}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 hover:bg-white/15 transition-all group"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full bg-primary-subtle flex items-center justify-center group-hover:bg-primary-glow transition-colors">
                      <Icon className="w-6 h-6 text-primary-light" />
                    </div>
                    <h3 className="text-xl font-bold text-lighter mb-2">
                      {title}
                    </h3>
                    <p className="text-lighter/60 text-sm mb-2">{description}</p>
                    <p className="text-lighter/90">{value}</p>
                  </a>
                ),
              )}
            </div>

            {/* Contact Form & Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary-light/20">
                  <h2 className="text-2xl font-bold text-lighter mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-accent/20 border border-accent/30 rounded-lg">
                      <p className="text-accent font-semibold">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-lighter mb-2 font-medium"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-light/30 text-lighter placeholder-lighter/40 focus:outline-none focus:border-accent transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-lighter mb-2 font-medium"
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-light/30 text-lighter placeholder-lighter/40 focus:outline-none focus:border-accent transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-lighter mb-2 font-medium"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-light/30 text-lighter placeholder-lighter/40 focus:outline-none focus:border-accent transition"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-lighter mb-2 font-medium"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-light/30 text-lighter placeholder-lighter/40 focus:outline-none focus:border-accent transition resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full text-lg font-bold bg-accent hover:bg-accent-light text-background py-6"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <SendIcon className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar - Social & FAQ */}
              <div className="space-y-8">
                {/* Social Media */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <h3 className="text-xl font-bold mb-6 text-lighter">
                    Connect With Us
                  </h3>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                    <a
                      href="mailto:contact@example.com"
                      className="group flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border-2 border-primary-light transition-all duration-300 bg-white/10 hover:bg-accent hover:border-accent"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 transition-colors text-lighter group-hover:text-background" />
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                  <h3 className="text-xl font-bold text-lighter mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-lighter/80">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-lighter/60 text-sm mt-4">
                      * All times in EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-lighter text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map(({ question, answer }) => (
                  <div
                    key={question}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20"
                  >
                    <h3 className="text-lg font-bold text-lighter mb-3">
                      {question}
                    </h3>
                    <p className="text-lighter/80">{answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-subtle to-transparent rounded-xl p-8 border border-primary-light/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-lighter">
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

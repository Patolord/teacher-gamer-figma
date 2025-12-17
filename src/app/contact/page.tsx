"use client";

import {
  ArrowLeftIcon,
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  SendIcon,
  Twitter,
  Youtube,
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

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877f2",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com",
    color: "#1da1f2",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com",
    color: "#e4405f",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0077b5",
  },
  {
    icon: Youtube,
    name: "YouTube",
    href: "https://youtube.com",
    color: "#ff0000",
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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
                const contactSection = document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                <MessageSquareIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">We're Here to Help</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Get In Touch
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Have questions about our courses or methodology? Want to bring 
                game-based learning to your school? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map(({ icon: Icon, title, description, value, link }) => (
                <a
                  key={title}
                  href={link}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/60 text-sm mb-2">{description}</p>
                  <p className="text-white/90">{value}</p>
                </a>
              ))}
            </div>

            {/* Contact Form & Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send Us a Message
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-300 font-semibold">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-white mb-2 font-medium"
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
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white mb-2 font-medium"
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
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white mb-2 font-medium"
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
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white mb-2 font-medium"
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
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white py-6"
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
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Connect With Us
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map(({ icon: Icon, name, href, color }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <Icon
                            className="w-5 h-5 group-hover:scale-110 transition-transform"
                            style={{ color }}
                          />
                        </div>
                        <span className="text-white font-medium">{name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-white/80">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-white/60 text-sm mt-4">
                      * All times in EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map(({ question, answer }) => (
                  <div
                    key={question}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-3">
                      {question}
                    </h3>
                    <p className="text-white/80">{answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-indigo-500/20 to-transparent rounded-xl p-8 border border-indigo-500/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Transform Your Teaching?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Explore our courses and start your journey into game-based learning today.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-6"
                asChild
              >
                <Link href="/home">
                  View Our Courses
                </Link>
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



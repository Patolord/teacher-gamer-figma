"use client";

import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CreditCardIcon,
  GraduationCapIcon,
  HelpCircleIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: GraduationCapIcon,
    faqs: [
      {
        question: "What is game-based learning?",
        answer:
          "Game-based learning uses role-playing games and interactive storytelling to teach academic concepts and skills. It engages students through narrative, character development, and collaborative problem-solving while meeting educational standards.",
      },
      {
        question: "Do I need RPG experience to take your courses?",
        answer:
          "Not at all! Our courses are designed for educators at all levels, from complete beginners to experienced game masters. We start with the basics and build up your skills progressively.",
      },
      {
        question: "What age groups can benefit from game-based learning?",
        answer:
          "We primarily work with students aged 10 and above, though our methods can be adapted for various age ranges. The key is adjusting complexity and themes to match your students' developmental levels.",
      },
      {
        question: "How long does it take to implement game-based learning?",
        answer:
          "You can start small with single sessions and scale up as you grow comfortable. Most educators begin seeing engagement benefits within their first few sessions, with full implementation taking 1-2 months.",
      },
    ],
  },
  {
    title: "Courses & Content",
    icon: BookOpenIcon,
    faqs: [
      {
        question: "How long are the courses?",
        answer:
          "Course lengths vary from 6-20 weeks depending on the level. Level 1 (Intro to Multiverse) is 6 weeks, Level 2 (Space Holder) is 12 weeks, and Level 3 (World Builder) is 20 weeks. All courses are self-paced with optional cohort-based learning opportunities.",
      },
      {
        question: "What's included in each course?",
        answer:
          "Each course includes video lessons, downloadable resources, templates, community access, and practical assignments. Higher-level courses include one-on-one coaching sessions and advanced game master materials.",
      },
      {
        question: "Can I access course materials after completion?",
        answer:
          "Yes! You get lifetime access to all course materials, including future updates and additions. We continuously improve our content based on educator feedback.",
      },
      {
        question: "Are there prerequisites for advanced courses?",
        answer:
          "We recommend taking courses in order (Level 1 → Level 2 → Level 3) as each builds on previous concepts. However, experienced game masters may skip Level 1 after completing an assessment.",
      },
      {
        question: "Do you offer group or school-wide training?",
        answer:
          "Yes! We offer custom training packages for schools and districts. Contact us to discuss bulk pricing and customized professional development options.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: CreditCardIcon,
    faqs: [
      {
        question: "How much do courses cost?",
        answer:
          "Level 1 courses start at $299, Level 2 at $599, and Level 3 at $999. We also offer payment plans and bundle discounts when purchasing multiple courses together.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your course for any reason, contact us within 30 days of purchase for a full refund.",
      },
      {
        question: "Are payment plans available?",
        answer:
          "Yes! We offer 3-month and 6-month payment plans for all courses. Select the payment plan option at checkout to spread your payments over time.",
      },
      {
        question: "Do you offer educator discounts?",
        answer:
          "Active educators receive a 20% discount on all courses. Verify your educator status during checkout with a valid school email or teaching license.",
      },
      {
        question: "Can I get reimbursed by my school?",
        answer:
          "Many schools reimburse professional development expenses. We provide detailed receipts and course descriptions to help with your reimbursement requests.",
      },
    ],
  },
  {
    title: "Community & Support",
    icon: UsersIcon,
    faqs: [
      {
        question: "Is there a community for course participants?",
        answer:
          "Yes! All course participants get access to our private Discord community where you can connect with other educators, share experiences, and get feedback on your game sessions.",
      },
      {
        question: "How do I get help if I'm stuck?",
        answer:
          "We offer multiple support channels: community forums, email support, live Q&A sessions (for higher-tier courses), and extensive documentation. Most questions get answered within 24 hours.",
      },
      {
        question: "Can I collaborate with other educators?",
        answer:
          "Absolutely! Our community encourages collaboration. Many educators co-teach sessions, share resources, and develop campaigns together through our platform.",
      },
      {
        question: "Are there networking opportunities?",
        answer:
          "We host monthly virtual meetups, annual conferences, and regional workshops where educators can network, share best practices, and learn from guest speakers.",
      },
    ],
  },
  {
    title: "Shop & Products",
    icon: ShoppingBagIcon,
    faqs: [
      {
        question: "What products do you sell?",
        answer:
          "We offer game master guides, campaign modules, custom dice sets, character sheets, world-building templates, and classroom posters. All products are designed specifically for educational settings.",
      },
      {
        question: "Do digital products come with physical items?",
        answer:
          "Some bundles include both digital and physical components. Check individual product descriptions for details. Digital products are available for immediate download after purchase.",
      },
      {
        question: "What's your shipping policy?",
        answer:
          "We ship physical products within 2-3 business days. Domestic shipping takes 5-7 days, international 10-14 days. Free shipping on orders over $50 in the US.",
      },
      {
        question: "Can I return physical products?",
        answer:
          "Physical products can be returned within 30 days if unused and in original condition. Digital products are non-refundable after download, but we're happy to help resolve any issues.",
      },
    ],
  },
  {
    title: "Technical & General",
    icon: HelpCircleIcon,
    faqs: [
      {
        question: "What devices are supported?",
        answer:
          "Our platform works on all modern devices: desktops, laptops, tablets, and smartphones. We recommend a larger screen for the best course viewing experience.",
      },
      {
        question: "Do I need special software?",
        answer:
          "No special software required! Everything runs in your web browser. For downloading resources, you'll need a PDF reader. Optional: Discord for community access.",
      },
      {
        question: "How do I access my purchases?",
        answer:
          "After purchase, log into your account and visit 'My Courses' or 'My Downloads' in your dashboard. Course access is instant; downloadable content is available immediately.",
      },
      {
        question: "Can I share my course access with colleagues?",
        answer:
          "Course licenses are for individual use. For group access, please contact us about our school/district packages which offer better pricing and administrative features.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes! We use industry-standard encryption for all data transmission and storage. We never share your information with third parties and comply with all privacy regulations.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (categoryTitle: string, question: string) => {
    const key = `${categoryTitle}-${question}`;
    setOpenItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const isOpen = (categoryTitle: string, question: string) => {
    return openItems.includes(`${categoryTitle}-${question}`);
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
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-lighter transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-amber-400/30 text-amber-300">
                <HelpCircleIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Frequently Asked Questions
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-lighter leading-tight">
                How Can We Help You?
              </h1>

              <p className="text-xl text-lighter/90 leading-relaxed max-w-3xl mx-auto">
                Find answers to common questions about our courses, products,
                and game-based learning methodology. Can't find what you're
                looking for?{" "}
                <Link
                  href="/contact"
                  className="text-accent hover:text-amber-300 underline"
                >
                  Contact us
                </Link>
                .
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">500+</div>
                <div className="text-lighter/70 text-sm">Educators Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">10K+</div>
                <div className="text-lighter/70 text-sm">Students Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">95%</div>
                <div className="text-lighter/70 text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">24/7</div>
                <div className="text-lighter/70 text-sm">Support Access</div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-lighter">
                      {category.title}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-3">
                    {category.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-white/10 backdrop-blur-sm rounded-xl border border-primary-light/20 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            toggleItem(category.title, faq.question)
                          }
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-lg font-semibold text-lighter pr-4">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                              isOpen(category.title, faq.question)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen(category.title, faq.question)
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-0 text-lighter/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions? */}
            <div className="bg-gradient-to-br from-amber-400/20 to-transparent rounded-xl p-8 md:p-12 border border-amber-400/30 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-lighter">
                Still Have Questions?
              </h2>
              <p className="text-xl text-lighter/80 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is
                here to help. Reach out and we'll get back to you as soon as
                possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-8 py-6"
                  asChild
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold bg-accent text-background px-8 py-6"
                  asChild
                >
                  <Link href="/home">Browse Courses</Link>
                </Button>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <BookOpenIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-lighter mb-3">
                  Documentation
                </h3>
                <p className="text-lighter/80 mb-4">
                  Explore our comprehensive guides and tutorials.
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-amber-300 font-semibold"
                >
                  Read Docs →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <UsersIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-lighter mb-3">Community</h3>
                <p className="text-lighter/80 mb-4">
                  Join our Discord to connect with other educators.
                </p>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-amber-300 font-semibold"
                >
                  Join Discord →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <GraduationCapIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-lighter mb-3">
                  Free Trial
                </h3>
                <p className="text-lighter/80 mb-4">
                  Try our intro course for free before committing.
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-amber-300 font-semibold"
                >
                  Start Free Trial →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}

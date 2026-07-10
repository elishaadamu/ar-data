"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "@/assets/logo/ar-data.jpeg";
import HappyWoman from "@/assets/happy-woman.png";
import MtnLogo from "@/assets/mtn-logo.jpg";
import NineMobileLogo from "@/assets/9mobile.png";
import GloLogo from "@/assets/glo.webp";
import AirtelLogo from "@/assets/airtel.png";
import {
  BadgeCheck,
  Bolt,
  ChevronDown,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  Landmark,
  Menu,
  PhoneCall,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tv,
  Wifi,
  X,
  Zap,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Globe,
  ArrowUpRight,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────── */

const networks = [
  { name: "MTN", logo: MtnLogo, color: "#FFCC00" },
  { name: "Airtel", logo: AirtelLogo, color: "#FF0000" },
  { name: "Glo", logo: GloLogo, color: "#50B748" },
  { name: "9mobile", logo: NineMobileLogo, color: "#006B53" },
];

const services = [
  {
    title: "Data Bundles",
    description:
      "Affordable plans across MTN, Airtel, Glo, and 9mobile. Get the best rates for all your data needs.",
    icon: Wifi,
    href: "/signin",
    color: "from-blue-600 to-indigo-700",
    bgGlow: "group-hover:shadow-blue-500/10",
    accent: "blue",
  },
  {
    title: "Airtime Top-up",
    description:
      "Recharge any Nigerian network instantly. Fast, secure, and always available.",
    icon: Smartphone,
    href: "/signin",
    color: "from-rose-500 to-red-600",
    bgGlow: "group-hover:shadow-red-500/10",
    accent: "rose",
  },
  {
    title: "Cable TV",
    description:
      "Renew DSTV, GOtv, and StarTimes subscriptions without leaving your home.",
    icon: Tv,
    href: "/signin",
    color: "from-purple-500 to-violet-600",
    bgGlow: "group-hover:shadow-purple-500/10",
    accent: "purple",
  },
  {
    title: "Electricity Bills",
    description:
      "Pay prepaid and postpaid power bills securely from anywhere in Nigeria.",
    icon: Bolt,
    href: "/signin",
    color: "from-amber-500 to-orange-600",
    bgGlow: "group-hover:shadow-amber-500/10",
    accent: "amber",
  },
];

const stats = [
  { value: "100k+", label: "Happy Users", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Zap },
  { value: "24/7", label: "Support", icon: Headphones },
  { value: "4+", label: "Networks", icon: Globe },
];

const highlights = [
  {
    title: "Instant Wallet Funding",
    description:
      "Fund once, buy repeatedly, and keep every payment traceable from your account. Multiple funding options available.",
    icon: Landmark,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Protected sign-in, encrypted user storage, and payment-first transaction handling with 256-bit SSL encryption.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support Team",
    description:
      "Clear service paths for everyday users, agents, and business developers. Get help when you need it most.",
    icon: Headphones,
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click 'Get Started' or 'Sign Up' at the top right. Provide your email, phone number, and password. You'll receive a verification code via SMS to confirm your account.",
  },
  {
    question: "Is it safe to buy data and airtime with AR Data?",
    answer:
      "Yes! We use encrypted transactions and secure payment processing. Your wallet and personal data are protected with industry-standard security protocols.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most services are instant! Data bundles, airtime, and bill payments are delivered within seconds to your network provider or service.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major debit and credit cards, bank transfers, and USSD. Fund your wallet using any method that works best for you.",
  },
  {
    question: "Can I use AR Data as an agent or reseller?",
    answer:
      "Absolutely! We have dedicated agent and business plans. Sign in with your agent credentials or contact support to set up your business account.",
  },
  {
    question: "What if my transaction fails?",
    answer:
      "If a transaction fails, funds are returned to your wallet automatically within 24 hours. Contact support if you need immediate assistance.",
  },
];

const testimonials = [
  {
    name: "Adebayo O.",
    role: "Business Owner",
    text: "AR Data has transformed how I manage my telecom business. The agent panel is incredibly efficient!",
    rating: 5,
  },
  {
    name: "Chioma N.",
    role: "Student",
    text: "I save so much on data bundles using AR Data. The prices are unbeatable and delivery is always instant.",
    rating: 5,
  },
  {
    name: "Ibrahim M.",
    role: "Freelancer",
    text: "From electricity bills to cable TV, AR Data handles everything I need. One platform for all my payments!",
    rating: 5,
  },
];

/* ─── Hooks ───────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/* ─── Sub-Components ──────────────────────────────────── */

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        open
          ? "border-blue-200 bg-blue-50/50 shadow-lg shadow-blue-500/5"
          : "border-slate-200/80 bg-white hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="pr-4 text-base font-semibold text-slate-900">
          {faq.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "rotate-180 bg-blue-600 text-white"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-6 text-sm leading-relaxed text-slate-600">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

/* ─── Main Component ──────────────────────────────────── */

const LandingHome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [heroRef, heroVisible] = useInView(0.1);
  const [servicesRef, servicesVisible] = useInView();
  const [whyRef, whyVisible] = useInView();
  const [testimonialsRef, testimonialsVisible] = useInView();
  const [faqRef, faqVisible] = useInView();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-900 overflow-hidden">
      {/* ═══ HEADER ═══ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/85 backdrop-blur-2xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative">
              <Image
                src={Logo}
                alt="AR Data"
                className="relative h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-blue-600/10"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-950">
                AR Data
              </span>
              <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                VTU Platform
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {[
              { label: "Services", href: "#services" },
              { label: "Why AR Data", href: "#why-us" },
              { label: "Reviews", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:text-blue-600 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/signin"
              className="hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-blue-600 hover:bg-slate-100 sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-blue-600 px-4 py-2.5 sm:px-6 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1 rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-2xl md:hidden">
            <nav className="flex flex-col gap-1 px-4 py-3">
              {["Services", "Why AR Data", "Reviews", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-14 sm:pb-16 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none hero-gradient" />
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Centered text block */}
          <div
            className={`mx-auto max-w-3xl text-center ${
              heroVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Nigeria&apos;s trusted VTU platform
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Buy Data, Airtime &{" "}
              <span className="gradient-text">Pay Bills</span>
              <br className="hidden sm:block" /> Instantly
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              AR Data gives individuals, agents, and growing teams a simple
              place to recharge phones, manage subscriptions, and settle
              utilities — all from one powerful platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-400"
              >
                Sign In to Dashboard
              </Link>
          </div>
          </div>

          {/* Stats bar */}
          <div
            className={`mt-16 mx-auto max-w-3xl ${
              heroVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm px-2 py-4 sm:py-5">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-center gap-3 px-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-950 leading-tight">
                        {item.value}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NETWORK LOGOS STRIP ═══ */}
      <section className="relative border-y border-slate-200/60 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            All major networks supported
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-16 flex-wrap">
            {networks.map((network) => (
              <div
                key={network.name}
                className="group flex flex-col items-center gap-2.5 transition-transform hover:scale-110"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fafbfc] p-2 ring-1 ring-slate-200 transition group-hover:bg-white group-hover:shadow-md group-hover:ring-slate-350 sm:h-20 sm:w-20 sm:p-3">
                  <Image
                    src={network.logo}
                    alt={network.name}
                    className="h-full w-full object-contain rounded-lg"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-900 transition-colors">
                  {network.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section
        id="services"
        className="relative py-14 sm:py-16 bg-[#fafbfc]"
        ref={servicesRef}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col justify-between gap-6 md:flex-row md:items-end ${
              servicesVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <Zap className="h-3 w-3" />
                Core Services
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Everything you need,{" "}
                <span className="gradient-text">in one place</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-500">
                From data bundles to bill payments, we&apos;ve got every digital
                service your daily life requires.
              </p>
            </div>
            <Link
              href="/signin"
              className="group inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-lg shadow-slate-950/10"
            >
              Open Dashboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bento-style service grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:border-slate-350 hover:shadow-xl hover:-translate-y-1 ${
                    servicesVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Gradient orb on hover */}
                  <div
                    className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10`}
                  />

                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                    Get started
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY AR DATA ═══ */}
      <section id="why-us" className="relative py-14 sm:py-16 bg-white overflow-hidden" ref={whyRef}>
        {/* Divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-16 lg:grid-cols-2 ${
              whyVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {/* Left – content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <Star className="h-3 w-3" />
                Why choose us
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                A smarter way to manage{" "}
                <span className="gradient-text">digital payments</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500">
                The interface keeps essential VTU actions close, so customers can
                move from wallet funding to service purchase without switching
                tools or losing transaction records.
              </p>

              <div className="mt-10 space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-2xl border border-slate-100 bg-[#fafbfc] p-5 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/20"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right – Wallet mock card */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow */}
                <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-3xl" />

                <div className="relative rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 p-[1px] shadow-2xl shadow-slate-900/10">
                  <div className="rounded-[23px] bg-[#0a0f1c] p-7">
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Logo}
                          alt="AR Data"
                          className="h-11 w-11 rounded-full bg-white object-cover p-0.5"
                        />
                        <div>
                          <p className="text-sm font-semibold text-blue-100">
                            AR Data Wallet
                          </p>
                          <p className="text-xs text-white/30">
                            Ready for purchase
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-blue-400/15 px-3 py-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                        <span className="text-[10px] font-bold text-blue-300">
                          LIVE
                        </span>
                      </div>
                    </div>

                    {/* Balance card */}
                    <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-750 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-200/70">
                        Wallet Balance
                      </p>
                      <p className="mt-2 text-3xl font-extrabold text-white">
                        ₦25,000
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Link
                          href="/signin"
                          className="group rounded-xl bg-white px-4 py-2.5 text-center text-xs font-bold text-blue-750 transition-all hover:shadow-lg"
                        >
                          Buy Data
                        </Link>
                        <Link
                          href="/signin"
                          className="rounded-xl border border-white/30 px-4 py-2.5 text-center text-xs font-bold text-white transition hover:bg-white/10"
                        >
                          Pay Bill
                        </Link>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        {
                          label: "MTN 2GB",
                          value: "₦500",
                          color: "text-yellow-450 bg-yellow-450/10",
                        },
                        {
                          label: "Airtel 1GB",
                          value: "₦300",
                          color: "text-red-400 bg-red-400/10",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-white/[0.06] transition hover:bg-white/[0.08]"
                        >
                          <p
                            className={`text-[10px] font-semibold uppercase tracking-wider ${item.color} w-fit px-2 py-0.5 rounded-md`}
                          >
                            {item.label}
                          </p>
                          <p className="mt-1.5 text-lg font-bold text-white">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Recent transaction */}
                    <div className="mt-4 rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">
                              Glo 3GB
                            </p>
                            <p className="text-[10px] text-white/30">
                              Just now
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400">
                          Success
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section
        id="testimonials"
        className="relative py-14 sm:py-16 bg-[#fafbfc]"
        ref={testimonialsRef}
      >
        {/* Divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center ${
              testimonialsVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Star className="h-3 w-3" />
              Customer Stories
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Loved by{" "}
              <span className="gradient-text">thousands of Nigerians</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
              From students managing their data to business owners paying
              utilities daily, AR Data simplifies digital payments for everyone.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:border-slate-350 hover:shadow-xl hover:-translate-y-1 ${
                  testimonialsVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-105 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-950">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <div className="flex -space-x-3">
              {["E", "A", "M", "C", "O"].map((initial, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500 text-xs font-bold text-white shadow-md"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-950">500,000+</span> happy
              users and counting
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="relative py-14 sm:py-16 bg-white" ref={faqRef}>
        {/* Divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center ${
              faqVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <BadgeCheck className="h-3 w-3" />
              FAQ
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Got questions?{" "}
              <span className="gradient-text">We&apos;ve got answers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
              Everything you need to know about AR Data and our VTU services.
            </p>
          </div>

          <div
            className={`mt-12 space-y-3 ${
              faqVisible ? "animate-fade-in delay-300" : "opacity-0"
            }`}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/30 p-6 text-center">
            <p className="font-semibold text-blue-900">
              Still have questions?{" "}
              <a
                href="tel:+2348140950947"
                className="inline-flex items-center gap-1 font-bold text-blue-600 underline decoration-blue-600/30 decoration-2 underline-offset-4 hover:decoration-blue-600 transition"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Call our support team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden py-14 sm:py-16 bg-[#fafbfc]">
        {/* Divider line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 text-center overflow-hidden shadow-md shadow-slate-200/20">
            {/* Subtle dot grid pattern inside CTA card */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Sparkles className="h-3 w-3" />
              Ready to start?
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Start saving on data, airtime &{" "}
              <span className="text-blue-600">bill payments</span> today.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Join thousands of Nigerians who trust AR Data for all their VTU
              needs. Agents and business teams can use their dedicated sign-in
              paths as the platform grows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Create Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+2348140950947"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-400"
              >
                <PhoneCall className="h-4 w-4" />
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative border-t border-slate-200/60 bg-white overflow-hidden">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={Logo}
                    alt="AR Data"
                    className="relative h-11 w-11 rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold text-slate-950">
                    AR Data
                  </span>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-600">
                    VTU Platform
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
                Your trusted partner for data bundles, airtime, bill payments,
                and identity verification services across all major Nigerian
                networks.
              </p>

              {/* Network logos in footer */}
              <div className="mt-6 flex items-center gap-3">
                {networks.map((n) => (
                  <div
                    key={n.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 p-1 ring-1 ring-slate-200/60"
                  >
                    <Image
                      src={n.logo}
                      alt={n.name}
                      className="h-full w-full rounded object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-bold text-slate-950">Quick Links</h4>
              <nav className="mt-4 flex flex-col gap-2.5">
                {[
                  { label: "Buy Data", href: "/signin" },
                  { label: "Buy Airtime", href: "/signin" },
                  { label: "Pay Bills", href: "/signin" },
                  { label: "BVN / NIN", href: "/signin" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-blue-650"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Account */}
            <div>
              <h4 className="text-sm font-bold text-slate-950">Account</h4>
              <nav className="mt-4 flex flex-col gap-2.5">
                {[
                  { label: "Sign In", href: "/signin" },
                  { label: "Create Account", href: "/signup" },
                  { label: "Agent Login", href: "/signin" },
                  { label: "Support", href: "tel:+2348140950947" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-blue-650"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} AR Data. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
              Secured with 256-bit SSL encryption
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingHome;

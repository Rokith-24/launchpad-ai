import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  X,
  Zap,
  Download,
  ShieldCheck,
  Sparkles,
  Rocket,
  Instagram,
  ListChecks,
  ArrowRight,
  Clock,
  Store,
  IndianRupee,
  HelpCircle,
} from "lucide-react";
import bundleHero from "@/assets/bundle-hero.png";
import pdfPrompt from "@/assets/pdf-prompt.png";
import pdfChecklist from "@/assets/pdf-checklist.png";
import pdfInstagram from "@/assets/pdf-instagram.png";

const PAGE_TITLE =
  "Digital Vault — Turn Ideas Into Income in 72 Hours for ₹99";
const PAGE_DESCRIPTION =
  "Digital Vault AI Starter Kit: 3 PDF guides to research, create, launch and sell your first digital product in 72 hours using free AI tools. Instant download for ₹99.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI starter kit, digital products, sell digital products, ChatGPT prompts, launch checklist, Instagram launch kit, side hustle India, ₹99 digital product",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "AI Starter Kit for Selling Digital Products",
          description: PAGE_DESCRIPTION,
          brand: { "@type": "Brand", name: "Digital Vault" },
          category: "Digital Product Bundle",
          offers: {
            "@type": "Offer",
            price: "99",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "/",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "I'm a complete beginner. Will this work for me?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — this bundle was designed specifically for beginners with zero experience.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need paid AI tools or subscriptions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The entire workflow uses the free versions of ChatGPT and other free tools.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need design skills?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The kit shows you simple beginner-friendly ways to create everything without design experience.",
              },
            },
            {
              "@type": "Question",
              name: "Is this a one-time payment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. One-time ₹99 — no subscription, no hidden charges, lifetime access.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

const PAYMENT_URL = "https://superprofile.bio/vp/ai-starter-kit--launch-your-first-digital-product";
const BUY_SECTION = "#buy";

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={PAYMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary text-base sm:text-lg ${className}`}
    >
      <Download className="h-5 w-5" />
      Get Instant Access — ₹99
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SecondaryCTA() {
  return (
    <a href={BUY_SECTION} className="btn-ghost text-base">
      Start Building Today
    </a>
  );
}

function TrustRow() {
  const items = [
    { icon: Sparkles, label: "Beginner Friendly" },
    { icon: ShieldCheck, label: "No Paid Tools Required" },
    { icon: Download, label: "Instant Download" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {items.map(({ icon: Icon, label }) => (
        <span key={label} className="chip">
          <Icon className="h-3.5 w-3.5 text-[color:var(--color-accent)]" />
          {label}
        </span>
      ))}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex">
          <span className="chip uppercase tracking-wider">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[color:var(--color-background)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] text-white text-xs font-black tracking-wide">
            DV
          </span>
          <span className="text-sm sm:text-base">Digital Vault</span>
        </a>
        <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-sm">
          Get it for ₹99
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Section className="!py-16 sm:!py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="chip mb-5">
              <Rocket className="h-3.5 w-3.5 text-[color:var(--color-accent)]" />
              Digital Products. Real Value.
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Turn Ideas Into
              <br />
              <span className="text-gradient">Income in 72 Hours</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
              AI resources, guides and templates to research, create, launch and sell your first
              digital product — using free AI tools, with zero experience required.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <PrimaryCTA />
              <SecondaryCTA />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <IndianRupee className="h-4 w-4" />
                One-time ₹99 · No subscription
              </span>
            </div>

            <div className="mt-8">
              <TrustRow />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)] blur-3xl" />
            <img
              src={bundleHero}
              alt="Digital Vault AI Starter Kit bundle — three PDF guides"
              width={1280}
              height={1024}
              className="mx-auto w-full max-w-xl mask-[radial-gradient(ellipse_72%_78%_at_50%_45%,black_38%,transparent_82%)]"
            />
          </div>
        </div>
      </Section>
    </section>
  );
}

function Transformation() {
  const before = [
    "Watching random YouTube videos",
    "No product idea",
    "No launch plan",
    "No sales",
  ];
  const after = [
    "Product created with AI",
    "Store live and ready",
    "Instagram launch content prepared",
    "Complete launch system in hand",
  ];
  return (
    <Section id="transformation">
      <SectionHeader
        eyebrow="The Transformation"
        title={
          <>
            From <span className="text-[color:var(--color-danger)]">confused beginner</span>
            <br className="hidden sm:block" /> to <span className="text-gradient">product creator</span>
          </>
        }
        sub="In 72 hours you go from staring at a blank screen to a live digital product you can sell."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="surface-card p-7">
          <div className="mb-5 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-danger)]/15 text-[color:var(--color-danger)]">
              <X className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold">Before</h3>
            <span className="ml-auto text-xs uppercase tracking-wider text-muted-foreground">
              Stuck
            </span>
          </div>
          <ul className="space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-danger)]/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card relative overflow-hidden p-7">
          <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
          <div className="mb-5 flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]">
              <Check className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold">After</h3>
            <span className="ml-auto text-xs uppercase tracking-wider text-[color:var(--color-success)]">
              Launched
            </span>
          </div>
          <ul className="space-y-3">
            {after.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-success)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Bundle() {
  const cards = [
    {
      img: pdfPrompt,
      icon: Sparkles,
      title: "AI Prompt Machine",
      outcome:
        "Generate winning product ideas, research demand, and create your product faster — using free AI tools.",
      bullets: ["100+ ready-to-use prompts", "Idea → outline → product flow", "Works with free ChatGPT"],
    },
    {
      img: pdfChecklist,
      icon: ListChecks,
      title: "72-Hour Launch Checklist",
      outcome:
        "Know exactly what to do each hour — no overwhelm, no guessing, no wasted time.",
      bullets: ["Hour-by-hour plan", "Niche, product & store steps", "Beginner-proof workflow"],
    },
    {
      img: pdfInstagram,
      icon: Instagram,
      title: "Instagram Launch Kit",
      outcome:
        "Launch and promote your product on Instagram with caption templates, hooks and a 7-post plan.",
      bullets: ["Caption + hook templates", "Reels script ideas", "7-day launch content plan"],
    },
  ];
  return (
    <Section id="bundle">
      <SectionHeader
        eyebrow="What's inside"
        title={<>Three focused guides. <span className="text-gradient">One complete system.</span></>}
        sub="No fluff. Every page is built to move you one step closer to your first sale."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(({ img, icon: Icon, title, outcome, bullets }) => (
          <article key={title} className="surface-card flex flex-col overflow-hidden">
            <div className="relative flex h-64 items-end justify-center overflow-hidden bg-[image:var(--gradient-soft)] p-6">
              <img
                src={img}
                alt={`${title} PDF mockup`}
                loading="lazy"
                width={1024}
                height={1536}
                className="h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{outcome}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-success)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3">
        <PrimaryCTA />
        <p className="text-xs text-muted-foreground">Instant download · Lifetime access · ₹99 one-time</p>
      </div>
    </Section>
  );
}

function Timeline() {
  const steps = [
    {
      tag: "Hour 1",
      icon: Sparkles,
      title: "Choose your niche",
      body: "Use the AI Prompt Machine to find a profitable beginner-friendly niche in minutes.",
    },
    {
      tag: "Day 1",
      icon: Zap,
      title: "Create your product",
      body: "Follow the prompts to outline and generate your first digital product with free AI.",
    },
    {
      tag: "Day 2",
      icon: Store,
      title: "Launch your store",
      body: "Set up a simple store and product page using the checklist — no tech skills needed.",
    },
    {
      tag: "Day 3",
      icon: Rocket,
      title: "Start selling",
      body: "Use the Instagram Launch Kit to publish content and drive your first sales.",
    },
  ];
  return (
    <Section id="after">
      <SectionHeader
        eyebrow="What happens after purchase"
        title={<>Your <span className="text-gradient">72-hour roadmap</span></>}
        sub="The exact order to follow once you download the kit."
      />
      <ol className="relative grid gap-5 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--color-primary)]/40 to-transparent md:block" />
        {steps.map(({ tag, icon: Icon, title, body }, i) => (
          <li key={tag} className="surface-card relative p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="chip">
                <Clock className="h-3 w-3" />
                {tag}
              </span>
            </div>
            <h3 className="text-base font-semibold">
              {i + 1}. {title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function WhyToday() {
  const points = [
    {
      icon: Zap,
      title: "Skip months of trial and error",
      body: "Stop piecing together free YouTube videos. Follow one proven workflow built for beginners.",
    },
    {
      icon: ShieldCheck,
      title: "No paid tools, no risk",
      body: "Everything runs on the free version of ChatGPT and free platforms — no extra spend.",
    },
    {
      icon: Rocket,
      title: "Launch this weekend",
      body: "By the end of 72 hours you have a real product, a real store and a real launch plan.",
    },
  ];
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Why buy today"
        title={<>Why pay ₹99 instead of <span className="text-gradient">figuring it out yourself?</span></>}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {points.map(({ icon: Icon, title, body }) => (
          <div key={title} className="surface-card p-6">
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "I'm a complete beginner. Will this work for me?",
      a: "Perfect — this bundle was designed specifically for beginners with zero experience.",
    },
    {
      q: "Do I need paid AI tools or subscriptions?",
      a: "No. The entire workflow uses the free versions of ChatGPT and other free tools.",
    },
    {
      q: "Do I need design skills?",
      a: "No. The kit shows you simple beginner-friendly ways to create everything without design experience.",
    },
    {
      q: "Can I sell in any niche?",
      a: "Yes. The system works for any niche — fitness, finance, study, productivity, art and more.",
    },
    {
      q: "How do I receive the files?",
      a: "Instant download right after payment. You'll get all three PDFs immediately.",
    },
    {
      q: "Is this a one-time payment?",
      a: "Yes. One-time ₹99 — no subscription, no hidden charges, lifetime access.",
    },
  ];
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Your <span className="text-gradient">questions</span>, answered</>}
      />
      <div className="mx-auto grid max-w-3xl gap-3">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-start gap-3 text-left font-medium">
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-accent)]" />
              <span className="flex-1">{q}</span>
              <span className="text-muted-foreground transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 pl-8 text-sm text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section id="buy">
      <div className="surface-card relative overflow-hidden p-8 sm:p-14">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-soft)]" />
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <span className="chip mb-4">
              <Rocket className="h-3.5 w-3.5 text-[color:var(--color-accent)]" />
              Ready when you are
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Launch your first product <span className="text-gradient">this weekend</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Get all three guides, the full 72-hour roadmap, and the Instagram launch kit — for one
              small one-time payment.
            </p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "AI Prompt Machine (PDF)",
                "72-Hour Launch Checklist (PDF)",
                "Instagram Launch Kit (PDF)",
                "Lifetime access & updates",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[color:var(--color-success)]" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card flex w-full flex-col items-center gap-4 p-7 md:w-72">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                One-time payment
              </div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <span className="text-5xl font-extrabold">₹99</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">No subscription · Lifetime access</div>
            </div>
            <PrimaryCTA className="w-full" />
            <SecondaryCTA />
            <div className="pt-1">
              <TrustRow />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
      <p className="mb-2">
        <a
          href="https://www.instagram.com/digitalvault.stores/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-foreground"
        >
          @digitalvault.stores
        </a>
        {" · "}Follow for free AI tools & digital product tips
      </p>
      <p>© {new Date().getFullYear()} Digital Vault. All rights reserved.</p>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Transformation />
        <Bundle />
        <Timeline />
        <WhyToday />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

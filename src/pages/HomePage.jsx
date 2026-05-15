import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ExternalLink,
  Sparkles,
  Home,
  DollarSign,
  Headphones,
  BookOpen,
} from 'lucide-react'
import { TELEGRAM_URL, WHATSAPP_HREF } from '../config/contact.js'

const heroBullets = [
  'Work from anywhere with a schedule you control',
  'Jump straight into real face-to-face conversations',
  'A worldwide community of members and hosts',
  'Performance-based bonuses on top of your earnings',
]

const offerItems = [
  {
    icon: Home,
    title: 'Fully remote',
    text: 'Pick your hours and work from wherever you feel comfortable.',
  },
  {
    icon: DollarSign,
    title: 'Strong earning potential',
    text: 'Competitive revenue share with room to grow—no artificial ceiling.',
  },
  {
    icon: Headphones,
    title: 'Dedicated support',
    text: 'A mentor stays with you through onboarding and beyond.',
  },
  {
    icon: BookOpen,
    title: 'Learning hub',
    text: 'Training materials, live sessions, and refresher webinars.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Start lively conversations',
    body: 'Bring energy to one-to-one video chats and keep the dialogue moving.',
  },
  {
    n: '2',
    title: 'Grow your circle',
    body: 'Favourite users stay in your list so relationships can deepen over time.',
  },
  {
    n: '3',
    title: 'Stay in touch',
    body: 'Use calls, chat, and shared moments to keep things fresh.',
  },
]

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
      {/* Hero: text first on mobile; text left / image right on lg */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-10">
        {/* Desktop/large: full text left */}
        <div className="hidden lg:block">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Advanced Talent Group
          </h1>
          <p className="mt-5 text-lg text-white/75 sm:text-xl">
            Be part of the first platform built around hosts who make real-time
            social video feel effortless.
          </p>
          <ul className="mt-8 space-y-3">
            {heroBullets.map((line) => (
              <li key={line} className="flex gap-3 text-white/85">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-slate-950 shadow-lg transition hover:bg-rose-50 sm:w-auto"
          >
            Apply now
            <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile/small: only title + intro before image */}
        <div className="lg:hidden">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Advanced Talent Group
          </h1>
          <p className="mt-5 text-lg text-white/75 sm:text-xl">
            Be part of the first platform built around hosts who make real-time
            social video feel effortless.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/mobile.png"
            alt="The app running on a smartphone, showing the host profile experience"
            className="h-auto w-full max-w-[min(100%,440px)] lg:max-w-[min(100%,560px)] select-none drop-shadow-[0_28px_64px_rgba(0,0,0,0.55)]"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Mobile/small: rest of hero after image */}
        <div className="lg:hidden">
          <ul className="mt-2 space-y-3">
            {heroBullets.map((line) => (
              <li key={line} className="flex gap-3 text-white/85">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-slate-950 shadow-lg transition hover:bg-rose-50 sm:w-auto"
          >
            Apply now
            <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* We are seeking */}
      <section
        id="about"
        className="scroll-mt-28 grid gap-10 border-t border-white/10 py-20 lg:grid-cols-2 lg:items-center"
      >
        <div className="relative mx-auto w-full max-w-[220px] sm:max-w-xs lg:max-w-sm">
          <div className="absolute -right-1 -top-1 z-10 text-rose-300 drop-shadow-md sm:-right-2 sm:-top-2">
            <Sparkles className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[3rem] border-2 border-white/25 bg-slate-950/80 shadow-2xl ring-1 ring-white/10">
            <img
              src="/videoCalling.png"
              alt="Host connecting face-to-face with members through live video on her phone"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Who we&apos;re looking for
          </h2>
          <div className="mt-6 space-y-4 text-white/75">
            <p>
              We run a global live video platform where members meet hosts for
              friendly, entertaining one-on-one sessions.
            </p>
            <p>
              Ideal candidates are outgoing, reliable on camera, and happy to
              keep a conversation going. You&apos;ll need a modern smartphone,
              a quiet-enough space, and genuine curiosity about people.
            </p>
            <p>
              Whether you&apos;re brand new or already comfortable on video,
              we care more about attitude and consistency than a perfect resume.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Your role: host, chat, entertain
          </h2>
          <p className="mt-4 text-white/70">
            You&apos;ll spend your time in private video sessions—listening,
            joking, and helping members feel seen. It&apos;s social, fast-paced,
            and built around authentic interaction.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden h-12 border-t-2 border-dashed border-white/25 md:block"
            style={{ borderStyle: 'dashed' }}
          />
          <div className="grid gap-12 md:grid-cols-3 md:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-slate-950 font-display text-xl font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.35)]">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="border-t border-white/10 py-20">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          What you get with us
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offerItems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-rose-400 drop-shadow-[0_0_14px_rgba(244,63,94,0.55)]">
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payments */}
      <section className="border-t border-white/10 py-20 text-center">
        <h2 className="font-display text-3xl font-bold tracking-[0.2em] sm:text-4xl">
          Payments
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Payouts are processed on a rolling 30-day cycle. Depending on your
          region, we support Payoneer, Epese, PayPal, and direct bank transfers.
          Our finance team confirms the best route once you&apos;re approved.
        </p>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="scroll-mt-28 border-t border-white/10 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to apply?{' '}
            <span className="inline-block" aria-hidden>
              🔥
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Reach out through one of the channels below—we&apos;ll reply with
            next steps and any extra questions.
          </p>
          <div className="mt-6 hidden justify-center gap-16 text-white/30 sm:flex">
            <svg
              aria-hidden
              viewBox="0 0 64 64"
              className="h-10 w-10 rotate-[-8deg]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M54 14C40 18 26 30 20 46" />
              <path d="M20 46l2-12" />
              <path d="M20 46l12-2" />
            </svg>
            <svg
              aria-hidden
              viewBox="0 0 64 64"
              className="h-10 w-10 rotate-[8deg]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 14c14 4 28 16 34 32" />
              <path d="M44 46l-2-12" />
              <path d="M44 46l-12-2" />
            </svg>
          </div>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition hover:brightness-110"
              style={{ backgroundColor: '#0088cc' }}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Apply now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition hover:brightness-110"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Apply now
            </a>
          </div>
        </div>
      </section>

      {/* Agency */}
      <section className="border-t border-white/10 py-16 text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          <span aria-hidden>💸</span> Running an agency?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          We partner with teams who recruit and coach hosts at scale. Tell us
          about your structure and we&apos;ll explore cooperation.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd5x0qP_LkQfX6_DPDE72E0Whc9cCIKAQUkpMHKjdKzFbJOFA/viewform"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex w-full max-w-md items-center justify-center rounded-full bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-slate-950 transition hover:bg-rose-50"
        >
          I represent an agency
        </a>
      </section>

      {/* Trust strip removed */}
    </div>
  )
}

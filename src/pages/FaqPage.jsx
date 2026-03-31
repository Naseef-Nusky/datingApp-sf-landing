import { useState } from 'react'
import { ChevronDown, Minus } from 'lucide-react'

const faqItems = [
  {
    q: 'What happens after I submit an application?',
    a: (
      <>
        <p>
          We review your submission and, if it&apos;s a fit, someone from our
          team reaches out. You&apos;ll be paired with a mentor who walks you
          through account setup, identity verification (government ID or
          passport), and signing the official agreement before you go live.
        </p>
      </>
    ),
  },
  {
    q: 'Why do you verify identity?',
    a: (
      <>
        <p>
          Verification helps protect members and hosts from fraud and misuse.
          Certain features stay locked until we&apos;ve confirmed who you are.
        </p>
        <p className="mt-3">
          Information is used only for identity checks and handled through
          secure, industry-standard processes—not for unrelated marketing.
        </p>
      </>
    ),
  },
  {
    q: 'I have never streamed or done live video. Can I still apply?',
    a: (
      <>
        <p>
          Yes. Many successful hosts started with no on-camera experience. We
          provide structured training, recorded lessons, live webinars, and
          optional one-on-one coaching so you can build confidence step by step.
        </p>
      </>
    ),
  },
  {
    q: 'How does compensation work?',
    a: (
      <>
        <p>
          Hosts earn through a transparent revenue-sharing model. Exact splits
          can vary by region and campaign—your manager or the onboarding form
          will spell out the numbers that apply to you.
        </p>
      </>
    ),
  },
  {
    q: 'When and how do I get paid?',
    a: (
      <>
        <p>
          Payouts follow a monthly cycle (roughly every 30 days), with funds
          typically sent by around the 10th of the following month, depending on
          processing windows.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>PayPal</li>
          <li>Bank transfer</li>
          <li>Popular e-wallets supported in your country</li>
        </ul>
        <p className="mt-3">
          Finance can recommend the smoothest option based on where you live.
        </p>
      </>
    ),
  },
  {
    q: 'How do I know this is legitimate?',
    a: (
      <>
        <p>
          Our organization has decades of experience in the industry—more than
          thirty years of operating serious, compliant programs worldwide.
        </p>
        <p className="mt-3">
          Every host relationship is backed by a written contract so expectations
          and protections are clear on both sides.
        </p>
      </>
    ),
  },
  {
    q: 'What do I need to get started?',
    a: (
      <>
        <p>In general we look for:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>About six hours per week you can reliably commit</li>
          <li>A smartphone with a solid camera and microphone</li>
          <li>Stable internet where you&apos;ll host from</li>
          <li>
            Comfortable conversational English—extra languages are a strong
            plus
          </li>
        </ul>
      </>
    ),
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
      <h1 className="text-center font-display text-3xl font-bold leading-tight sm:text-4xl">
        Still have questions? Here are straight answers{' '}
        <span className="inline-block" aria-hidden>
          ⬇️
        </span>
      </h1>

      <div className="mt-14 space-y-4">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-lg shadow-black/40"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-white/5"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-bold text-white sm:text-lg">
                  {item.q}
                </span>
                <span className="shrink-0 text-rose-400" aria-hidden>
                  {isOpen ? (
                    <Minus className="h-5 w-5" strokeWidth={2.5} />
                  ) : (
                    <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-white/10 px-5 pb-5 pt-0 text-sm leading-relaxed text-white/80">
                  <div className="pt-4">{item.a}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

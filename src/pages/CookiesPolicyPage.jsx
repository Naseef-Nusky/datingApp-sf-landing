const SUPPORT_EMAIL = 'info@advancedtalentgroup.com'

export default function CookiesPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 text-white/85 sm:px-6">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Cookies Policy
        </h1>
        <p className="mt-2 text-sm text-white/50">Last updated: May 12, 2026</p>
      </header>

      <div className="space-y-8 text-sm leading-relaxed sm:text-base">
        <p>
          This Cookies Policy explains how Advanced Talent Group uses cookies and
          similar technologies on this website.
        </p>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            What Are Cookies?
          </h2>
          <p className="mt-3">
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly and improve user
            experience.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            How We Use Cookies
          </h2>
          <p className="mt-3">We use cookies to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Keep the website functioning correctly</li>
            <li>Understand how visitors use our site</li>
            <li>Improve website performance</li>
            <li>Remember user preferences</li>
            <li>Support analytics and security features</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            Types of Cookies We Use
          </h2>
          <h3 className="mt-4 font-semibold text-white">Essential Cookies</h3>
          <p className="mt-2">
            Required for the website to operate properly.
          </p>
          <h3 className="mt-4 font-semibold text-white">Analytics Cookies</h3>
          <p className="mt-2">
            Help us understand visitor behavior and improve the site experience.
          </p>
          <h3 className="mt-4 font-semibold text-white">Functional Cookies</h3>
          <p className="mt-2">
            Remember settings and preferences for future visits.
          </p>
          <h3 className="mt-4 font-semibold text-white">Third-Party Cookies</h3>
          <p className="mt-2">
            Some third-party services, such as analytics or embedded content
            providers, may place cookies on your device.
          </p>
          <p className="mt-3">
            These providers manage their cookies according to their own privacy
            policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            Managing Cookies
          </h2>
          <p className="mt-3">
            You can control or disable cookies through your browser settings.
          </p>
          <p className="mt-3">
            Please note that disabling certain cookies may affect website
            functionality.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            Updates to This Policy
          </h2>
          <p className="mt-3">
            We may update this Cookies Policy periodically. Any changes will
            appear on this page with the updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-white sm:text-xl">
            Contact
          </h2>
          <p className="mt-3">For questions about our Cookies Policy, contact:</p>
          <p className="mt-2">
            Email:{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-rose-300 underline decoration-rose-400/50 underline-offset-2 hover:text-rose-200"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </article>
  )
}

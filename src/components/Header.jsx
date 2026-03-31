import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center text-white no-underline"
          onClick={() => setMenuOpen(false)}
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain sm:h-25"
            onError={(e) => {
              e.currentTarget.src = '/logo.png'
            }}
          />
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium tracking-wide sm:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-rose-400 underline decoration-rose-400 decoration-2 underline-offset-8'
                : 'text-white/90 transition hover:text-rose-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? 'text-rose-400 underline decoration-rose-400 decoration-2 underline-offset-8'
                : 'text-white/90 transition hover:text-rose-300'
            }
          >
            FAQ
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-md sm:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/25'
                    : 'text-white/90 hover:bg-white/5 hover:text-rose-200',
                ].join(' ')
              }
            >
              About
            </NavLink>
            <NavLink
              to="/faq"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/25'
                    : 'text-white/90 hover:bg-white/5 hover:text-rose-200',
                ].join(' ')
              }
            >
              FAQ
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

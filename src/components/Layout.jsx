import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div
      className="relative min-h-dvh text-white"
      style={{
        background:
          'radial-gradient(ellipse 100% 80% at 0% -10%, rgb(30 41 59 / 0.9) 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 100% 40%, rgb(69 10 10 / 0.85) 0%, transparent 50%), #030712',
      }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.4)_0%,transparent_35%,rgba(127,29,29,0.12)_100%)]" />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

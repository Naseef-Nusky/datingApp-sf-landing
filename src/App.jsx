import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import CookiesPolicyPage from './pages/CookiesPolicyPage.jsx'
import RouteSeoAndAnalytics from './components/RouteSeoAndAnalytics.jsx'

export default function App() {
  return (
    <>
      <RouteSeoAndAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies" element={<CookiesPolicyPage />} />
        </Route>
      </Routes>
    </>
  )
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyRouteSeo } from '../utils/seo';
import { trackPageView } from '../utils/analytics';

export default function RouteSeoAndAnalytics() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    applyRouteSeo(location.pathname);
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}

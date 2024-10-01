import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as Fathom from 'fathom-client';

import App from './App.tsx'
import './index.css'
import Privacy from './Privacy.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  }
]);

const AnalyticsApp = () => {
  useEffect(() => {
    // Initialize Fathom on the first load
    Fathom.load('CMIGGBKD', {
      includedDomains: ['metafixer.kochie.io'], // Replace with your domain
    });

    // Subscribe to navigation events (route changes)
    const unsubscribe = router.subscribe(({ }) => {
      Fathom.trackPageview(); // Track page view on every route change
    });

    // Clean up the subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnalyticsApp />
  </StrictMode>,
)

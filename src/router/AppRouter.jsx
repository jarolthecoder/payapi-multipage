import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "@/components/ui";

export const AppRouter = () => {
  return (
    <Routes>
      {routesMap.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={
            route.lazy ? (
              <Suspense fallback={<PageLoader />}>{route.component}</Suspense>
            ) : (
              route.component
            )
          }
        />
      ))}
    </Routes>
  );
};

const Homepage = lazy(() => import("../pages/homepage/Homepage"));
const About = lazy(() => import("../pages/about/About"));
const Pricing = lazy(() => import("../pages/pricing/Pricing"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const routesMap = [
  { id: "home", path: "/", component: <Homepage />, lazy: false },
  { id: "about", path: "about", component: <About />, lazy: true },
  { id: "pricing", path: "Pricing", component: <Pricing />, lazy: true },
  { id: "contact", path: "Contact", component: <Contact />, lazy: true },
];

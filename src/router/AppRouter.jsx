import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

export const AppRouter = () => {
  return (
    <Routes>
      {routesMap.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={<Suspense>{route.component}</Suspense>}
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
  { id: "home", path: "/", component: <Homepage /> },
  { id: "about", path: "about", component: <About /> },
  { id: "pricing", path: "Pricing", component: <Pricing /> },
  { id: "contact", path: "Contact", component: <Contact /> },
];

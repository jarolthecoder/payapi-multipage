import { useEffect } from "react";
import { Footer, Header } from "./components/layout";
import { CallToActionBar } from "./components/shared";
import { AppProvider } from "./context/AppProvider";
import { AppRouter } from "./router/AppRouter";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: true, // show animation only once on scroll
    });
    AOS.refresh();
  }, []);

  return (
    <AppProvider>
      <Header />
      <AppRouter />
      <CallToActionBar />
      <Footer />
    </AppProvider>
  );
}

export default App;

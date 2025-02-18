import { Footer, Header } from "./components/layout";
import { CallToActionBar } from "./components/shared";
import { AppProvider } from "./context/AppProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
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

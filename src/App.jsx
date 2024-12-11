import { Footer, Header } from "./components/layout";
import { CallToActionBar } from "./components/shared";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <CallToActionBar />
      <Footer />
    </>
  );
}

export default App;

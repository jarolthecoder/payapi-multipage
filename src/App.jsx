import { Footer, Header } from "./components/layout"
import { AppRouter } from "./router/AppRouter"

function App() {

  return (
    <>
      <Header />
        <AppRouter />
      <Footer />
    </>
  )
}

export default App

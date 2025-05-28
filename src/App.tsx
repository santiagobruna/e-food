import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles"
import Rotas from "./routes"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle/>
        <Cart/>
        <Rotas/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  )
}
export default App

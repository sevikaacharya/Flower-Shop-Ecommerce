import { Home } from "./components/Home/Home"
import { Shop } from "./components/Shop/Shop"
import { Aboutus } from "./components/Aboutus/Aboutus"
import { Contact } from "./components/Contact/Contact"
import { Cart } from "./components/Cart/Cart"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
function App() {
  return (
    <>
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/about" element={<Aboutus/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App

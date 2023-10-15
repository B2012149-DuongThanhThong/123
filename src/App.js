import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { Contact, Home, Login, Register, Reset } from "./pages";

// components
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Header } from "./components";
import ProductDetail from "./components/productDetail/ProductDetail";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/CreateProduct";
import Products from "./pages/admin/Products";
import Summary from "./pages/admin/Summary";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="products" element={<Products />}>
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

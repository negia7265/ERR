import "./App.css";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  redirect,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Register from "./components/Register";

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />

          <Route exact path="/" element={<Homepage />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

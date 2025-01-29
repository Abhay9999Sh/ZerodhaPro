import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import SignUp from "./landing_page/signup/SignUp.jsx";
import SignIn from "./landing_page/signup/SignIn.jsx";

import Pricing from "./landing_page/pricing/PricingPage.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import Product from "./landing_page/products/ProductsPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Home from "./dashboard/Home.jsx";
import Orders from "./dashboard/Orders.jsx";
import Summary from "./dashboard/Summary.jsx";
import Funds from "./dashboard/Funds.jsx";
import Positions from "./dashboard/Positions.jsx";
import Holdings from "./dashboard/Holdings.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Product />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/dashboard/" element={<Home />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/summary" element={<Summary />}></Route>
      <Route path="/positions" element={<Positions />}></Route>
      <Route path="/holdings" element={<Holdings />}></Route>
      <Route path="/funds" element={<Funds />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

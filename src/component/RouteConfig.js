import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Products from "./Products";
import Checkout from "./Checkout";

const RouteConfig = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Hero />}></Route>
                <Route path="/Product" element={<Products />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
        </Router>
    );
};

export default RouteConfig;

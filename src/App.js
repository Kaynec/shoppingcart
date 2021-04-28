import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./styles/Appandhome.scss";
const App = () => {
  const [items, setItems] = useState([
    {
      name: "Summer Set",
      quantity: 0,
      url: "https://bozorgstyle.com/wp-content/uploads/2021/04/n3-300x390.jpg",
      price: 7,
    },
    {
      name: "Tennis Set",
      quantity: 0,
      url: "https://bozorgstyle.com/wp-content/uploads/2021/04/n4-300x390.jpg",
      price: 8,
    },
    {
      name: "Men set with wallet",
      quantity: 0,
      url: "https://bozorgstyle.com/wp-content/uploads/2021/04/n5-300x390.jpg",
      price: 12,
    },
    {
      name: "Blue Shirt White Shoe Set",
      quantity: 0,
      url: "https://bozorgstyle.com/wp-content/uploads/2021/04/n1-300x390.jpg",
      price: 9,
    },
    {
      name: " Water Bottle Grey Shirt pants Set ",
      quantity: 0,
      url:
        "https://bozorgstyle.com/wp-content/uploads/2021/04/%D8%B3%D8%A7%DB%8C%D8%AA1-5-300x390.jpg",
      price: 13,
    },
    {
      name: "White Show",
      quantity: 0,
      url:
        "https://bozorgstyle.com/wp-content/uploads/2021/04/60-1-300x390.jpg",
      price: 5,
    },
    {
      name: "Sport Show ",
      quantity: 0,
      url:
        "https://bozorgstyle.com/wp-content/uploads/2021/04/tusi-300x390.jpg",
      price: 14,
    },
    {
      name: "White Men T-Shirt",
      quantity: 0,
      url:
        "https://dkstatics-public.digikala.com/digikala-products/116690198.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
      price: 16,
    },
  ]);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const numberOfAll = items.reduce((acc, item, idx) => {
      return (acc += item.quantity);
    }, 0);
    setItemCount((prev) => numberOfAll);
  }, [items]);
  return (
    <>
      <Router>
        <nav className="nav-bar">
          <Link to="/cart">CART {itemCount}</Link>
          <p> Polka Dots</p>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop items={items} setItems={setItems} />
          </Route>
          <Route exact path="/cart">
            <Cart items={items} setItems={setItems} itemCount={itemCount} />
          </Route>
        </Switch>

        <footer className="footer">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>

          <div className="github">
            <a href="https://github.com/Kaynec" target="_blank">
              <i className="lab la-github"></i>
            </a>
          </div>
        </footer>
      </Router>
    </>
  );
};
export default App;

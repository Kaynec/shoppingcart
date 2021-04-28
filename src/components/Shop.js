import React from "react";
import "../styles/shopandcart.scss";
export default function Shop(props) {
  const { items, setItems } = props;
  const increment = (e) => {
    const parent = e.target.parentElement.parentElement;
    let changedItems = items.map((item) => {
      if (item.url === parent.id) {
        const copyItem = { ...item };
        copyItem.quantity += 1;
        return copyItem;
      }
      return item;
    });
    setItems((prev) => changedItems);
  };
  const decrement = (e) => {
    const parent = e.target.parentElement.parentElement;
    let changedItems = items.map((item) => {
      if (item.url === parent.id && item.quantity > 0) {
        const copyItem = { ...item };
        copyItem.quantity = copyItem.quantity - 1;
        return copyItem;
      }
      return item;
    });
    setItems((prev) => changedItems);
  };
  return (
    <div className="shop-page">
      {items.map((item) => {
        return (
          <div className="item" key={item.url} id={item.url}>
            <p>{item.name}</p>
            <img src={item.url} />
            <div className="increment-decrement">
              <p style={{ textAlign: "center", fontSize: "1.4rem" }}>
                Price :{item.price + " USD"}
              </p>
              <button onClick={increment}>+</button>
              <span> {item.quantity} </span>
              <button onClick={decrement}>-</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

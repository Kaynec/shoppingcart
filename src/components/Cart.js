import React from "react";

const Cart = (props) => {
  const { items, setItems, itemCount } = props;
  const totalPrice = items.reduce((acc, item, i) => {
    return (acc += item.quantity * item.price);
  }, 0);

  const increment = (e) => {
    const parent = e.target.parentElement;
    let changedItems = items.map((item) => {
      console.log(parent.id);
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
    const parent = e.target.parentElement;
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
    <div className="cart">
      <div className="container">
        <span> {itemCount} ITEM</span>
        {items.map((item) => {
          if (item.quantity > 0) {
            return (
              <div key={item.url} className="item-container">
                <img src={item.url} />
                <div>
                  <p>{item.name} </p>
                  <p>Price : {item.quantity * item.price + " USD"} </p>
                  <div className="inc-dec" id={item.url}>
                    <button onClick={increment}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={decrement}>-</button>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="total">
          <span>Total To Pay</span>
          <span>{totalPrice} USD</span>
        </div>
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

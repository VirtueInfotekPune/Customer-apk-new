import React, { useEffect, useState } from 'react';
import './Order.css';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios'; // If you prefer to use axios

const Order = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {};
  console.log(cartItems)

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash on delivery');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const isPlaceOrderDisabled = totalPrice === 0;

  useEffect(() => {
    // You can implement any additional logic or fetch order details from the API here if needed
  }, []);

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = async () => {

    const itemsString = cartItems.map(item => `[${item.productname}-${item.quantity}-${item.productprice}]`).join(',');
    // console.log(itemsString)
    const formData = new FormData();
    formData.append("items", JSON.stringify(itemsString));
    formData.append("totalPrice", totalPrice);
    formData.append("deliveryAddress", deliveryAddress);

   

    setOrderPlaced(true)
    setTimeout(() => {

      setOrderPlaced(false)
    },1500)
  
    console.log(formData);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/cart/api/orderlist/', formData);
      console.log(response.data);
      // Handle the response or any other logic you need here
    } catch (error) {
      console.log("Error: \n", error.response.data);
    }
  };
  
  return (
    <div className="order-main">
      <div className="order-head">
        <h1>Checkout</h1>
      </div>
      <div className="payment">
        <label className="green-text">Payment Mode:</label>
        <select onChange={handlePaymentMethodChange}>
          <option value="Cash on delivery">Cash on delivery</option>
        </select>
      </div>
      <div className="delivery-address">
        <label className="green-text">Delivery Address:</label>
        <input type="text" value={deliveryAddress} onChange={handleDeliveryAddressChange} />
      </div>
      <div className="delivery">
        <span className="green-text">Deliver to:</span>
        <span>Nagpur, Maharashtra</span>
      </div>
      <div className="total">
        <span className="green-text">Total:</span>
        <span>{totalPrice}Rs</span>
      </div>
      <div className="button-main">
        <button className="order-button" onClick={handlePlaceOrder} disabled={isPlaceOrderDisabled}>
          Place Order
        </button>
        <button>
          <Link to="/home" className="c-shop">Continue Shopping</Link>
        </button>
      </div>

      {orderPlaced && (
        <div className="cart-message">
          <p>Your order is Placed!</p>
        </div>
      )}
      
      {cartItems && cartItems.length > 0 && (
        <div className="order-details">
          {/* <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>Product Name: {item.productname}</p>
                <p>Brand: {item.brand}</p>
                <p>Price: {item.productprice}</p>
              </li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default Order;








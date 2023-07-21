import React, { useEffect, useState } from 'react';
import './Order.css';
import { useLocation, Link } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {};
  // console.log(cartItems)

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash on delivery');

  const isPlaceOrderDisabled = totalPrice === 0;

  useEffect(() => {
    // You can implement any additional logic or fetch order details from the API here if needed
  }, []);

  // Function to handle the input change for delivery address
  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  // Function to handle the selection of payment method
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Function to handle placing the order and saving to local storage
  const handlePlaceOrder = () => {
    // Save the order details to local storage and display the cart item details in the console
    const orderData = {
      items: cartItems,
      totalPrice: totalPrice,
      deliveryAddress: deliveryAddress,
      // paymentMethod: selectedPaymentMethod,
      // Add other order data as needed
    };
    // console.log(cartItems)
    
    // Store the order data in local storage
    localStorage.setItem('order', JSON.stringify(orderData));

    // Display the order data in the console
    console.log('Order Data:', orderData);

    // Perform any other actions you want when placing the order
    // For example, you can redirect to a confirmation page or perform an API call to submit the order to the server.
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
          {/* Add other payment options if needed */}
        </select>
      </div>

      {/* Add the delivery address section */}
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
        {/* Call the handlePlaceOrder function when the button is clicked */}
        <button className="order-button" onClick={handlePlaceOrder} disabled={isPlaceOrderDisabled}>
          Place Order
        </button>

        <button><Link to="/home" className="c-shop">Continue Shopping</Link></button>
      </div>
      {cartItems && cartItems.length > 0 && (
        <div className="order-details">
          {/* <h2>Order Details:</h2> */}
          <ul>
            {/* {cartItems.map((item, index) => (
              <li key={index}>
                <p>Product Name: {item.productname}</p>
                <p>Brand: {item.brand}</p>
                <p>Price: {item.productprice}</p>
              </li>
            ))} */}
                {/* Add other product details as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Order;

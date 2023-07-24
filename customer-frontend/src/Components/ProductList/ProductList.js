import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { useLocation } from 'react-router-dom';
// import ProductCard from './ProductCard';
import axios from "axios"

export default function ProductList() {
  const location = useLocation();
  let obj = location.state;
  console.log(obj);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`https://adminpr.onrender.com/api/product/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      // const filteredProducts = json.filter(
      //   (item) => item.category === obj.category && item.subcategory === obj.subcategory
      // );
      // setProducts(filteredProducts);
      setProducts(json)
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getProducts();
  }, []);
  
  console.log(products)
    

  const tempobj = {
    image: 'https://via.placeholder.com/150x150',
    productname: 'Product name',
    brand: '250g',
    productprice: '79',
  };

  return (
    <div className="subcategory-page mt-64">
      <h1 className="subcategory-heading">Product List</h1>
      <div className="subcategory-row">
        {products.map((item) => (
          <ProductCard key={item.id} obj={item} />
          ))}
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
      </div>
      <div className="subcategory-row">
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
      </div>
      <h2 className="trending-heading">Trending</h2>
      <div className="trending-row">
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
      </div>
      <h2 className="top-seller-heading">Top Sellers</h2>
      <div className="top-seller-row">
        <ProductCard obj={tempobj} />
        <ProductCard obj={tempobj} />
      </div>
    </div>
  );
}


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

function ProductCard({ obj }) {
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(obj);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={obj.image} alt={obj.productname} />
       
      </div>
      <p>{obj.id}</p>
      <p className="product-weight">brand: {obj.brand}</p>
      <div className="product-price">
        <p>Rs. {obj.productprice}</p>
        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>

      {showMessage && (
        <div className="cart-message">
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
}

// export default ProductCard;


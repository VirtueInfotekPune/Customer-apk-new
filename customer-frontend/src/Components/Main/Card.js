import "./Card.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cards = () => {

  const [cardsData, setCardsData] = useState([]);
  const navigate = useNavigate();

  const getCatArray = async () => {
    const response = await fetch(`https://adminpr.onrender.com/api/product/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setCardsData(json);
  }
  useEffect(() => {
    getCatArray();
  }, []);
  return (
    <div>
      <h1>Shop By Category</h1>
      <div className="cards">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ backgroundColor: card.backcolor }}
          >
            <img src={card.image} alt="card-image" className="card-image" />
            <div className="card-title">{card.category}</div>
            <p>{card.brand}</p>
            <p>{card.productprice}</p>
            
            <Link
              to="/subcategory"
              state={card.id}
              className="card-offer"
              style={{ backgroundColor: card.color }}
            >
              {card.offer}
            </Link>
            {/* <button className="card-title" onClick={() => navigate("/subcategory", { state: { obj:  card.category  } })}></button> */}

          </div>
        ))}
      </div>
    </div>
  );
};

const Last = () => {
  return (
    <div className="container">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
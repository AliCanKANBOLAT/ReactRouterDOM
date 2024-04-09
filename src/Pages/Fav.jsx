import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fav() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, []);

  // Favori ürünlerin fiyatlarının toplamını hesapla
  const totalPrice = favs.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <h1>Card</h1>
      <div className="list-group">
        {favs.map((item) => (
          <Link
            key={item.id}
            to={`/products/category/${item.id}`}
            className="list-group-item list-group-item-action"
          >
            <img src={item.image} alt={item.title} style={{ marginRight: '10px', width: '50px' }} /> {/* Image */}
            {item.title.toUpperCase()} - ${item.price} {/* Title and Price */}
          </Link>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)} {/* Total Price */}
      </div>
    </>
  );
}

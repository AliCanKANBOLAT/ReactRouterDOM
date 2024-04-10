import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item, user }) {
  const productUrl = `/products/product/${item.id} `;

  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];

    // Favorilere eklenen ürünün tam bilgilerini kaydet
    const existingIndex = localFavs.findIndex((fav) => fav.id === product.id);
    if (existingIndex >= 0) {
      // Eğer ürün zaten favorilere eklenmişse, favorilerden çıkar
      localFavs = localFavs.filter((fav) => fav.id !== product.id);
    } else {
      // Eğer ürün favorilere eklenmemişse, favorilere ekle
      localFavs.push(product);
    }

    // Güncellenmiş favori listesini localStorage'a kaydet
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }

  return (
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={productUrl}>
          <img src={item.image} className="card-img-top p-3" alt={item.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description.substring(0, 20)}...</p>
          <p className="lead">{item.price}</p>

          {/* Favori butonu */}
          {user && (
            <button className="btn btn-primary" onClick={() => handleClick(item)}>
              Add to Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

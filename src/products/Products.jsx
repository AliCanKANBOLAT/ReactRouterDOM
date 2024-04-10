import { useEffect, useState } from "react";
import { ProductCard } from "../products";

export default function Products({ user }) {
  const [last20Products, setLast20Products] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => {
        // Ürünlerin tam bilgilerini alarak last20Products state'ine kaydet
        setLast20Products(data.map((product) => ({
          id: product.id,
          title: product.title,
          image: product.image,
          description: product.description,
          price: product.price
        })));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Products:</h2>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last20Products.map((item) => (
          <ProductCard user={user} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

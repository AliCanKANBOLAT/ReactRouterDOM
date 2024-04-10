import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ user }) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.error(error));
  }, [productId]);

  const handleFavorite = () => {
    // Favori ürünleri localStorage'dan al
    const favorites = JSON.parse(localStorage.getItem("favs")) ?? [];
    // Eğer ürün favori değilse, favori listesine ekle
    if (!favorites.some((fav) => fav.id === product.id)) {
      favorites.push(product); // Ürünün tam bilgilerini ekle
      localStorage.setItem("favs", JSON.stringify(favorites));
    }
  };

  return (
    <>
      <h1>{product?.title ?? null}</h1>
      <img src={product?.image ?? null} alt="" className="w-100 img-thumbnail" />
      <p>{product?.description ?? null}</p>
      <h2>{product?.price ?? null} $</h2>
      {/* Card a ekle butonu */}
      <button onClick={handleFavorite}>Add to Card</button>
    </>
  );
}

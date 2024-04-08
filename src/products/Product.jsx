import { useEffect, useState } from "react"
import{ useParams } from "react-router-dom"
export default function Product ({user}) {
    const {productId}= useParams()
    const[product, setProduct] = useState({})
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(res => console.error(res))
    },[productId])
   
    return(
        <>
        <h1>{product?.title??null}</h1>
        <img src={product?.image??null} alt="" className="w-100 img-thumbnail" />
        <p> {product?.description??null} </p>
        <h2>{product?.price??null} $</h2>
        </>
    )
}
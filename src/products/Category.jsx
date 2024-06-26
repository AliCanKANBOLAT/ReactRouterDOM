import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ProductCard from "./ProductCard"
export default function Category ({user}) {
    const {categoryName} = useParams()
    // console.log(categoryName)
    const [categoryProducts, setCategoryProducts] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(res => setCategoryProducts(res))
            .catch(res => console.error(res))
        }, [categoryProducts])
    return(
        <>
        <h1>Category: {categoryName.toUpperCase()}</h1>
        <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map(item => <ProductCard user={user} key={item.id}item={item} />)}
        </div>
        </>
    )
}
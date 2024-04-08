import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
export default function Fav() {
    const[favs, setFavs] = useState([])

    // const navigate = useNavigate()
    // if(!user?.id) {
    //    return <Navigate to="/" />
    // }
    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")) ?? [] )
    }, [])
    
    return (
      <>
        <h1>Favorite items</h1>
        {/* <ul>
            {favs.map(item => <li key={item.id}>{item.title}</li>)}
        </ul> */}
        <div className="list-group">
            {
                favs.map((item) =>
                <Link
                 key={item.id} 
                 to={`/products/category/${item.id}`}
                 className="list-group-item list-group-item-action"
                 >{item.title.toUpperCase()}
                 </Link> )
            }
        </div>

      </>
    )
  }
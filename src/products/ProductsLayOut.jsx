import Category from "./Category";
import { Outlet } from "react-router-dom"

export default function ProductsLayOut () {
    return(
        <>
        <div className="row">
            <div className="col-sm-8">
                <Outlet />
            </div>
            <div className="col-sm-4">
                <Category />
            </div>
        </div>
        </>
    )
}
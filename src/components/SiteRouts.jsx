import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import PageNotFound from '../Pages/PageNotFound';
import { Category, Product, ProductLayOut, Products } from '../products';
import Login from '../Pages/Login';

export default function SiteRoutes({handleLogin}) {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductLayOut />}> 
            <Route index={true} element={<Products />} />
            <Route path="category/:categoryName" element={<Category/>} />
            <Route path="product/:productId" element={<Product/>} />
            </Route>
            <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes> 
    )
}
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import PageNotFound from '../Pages/PageNotFound';
import { ProductLayOut } from '../products';

export default function SiteRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductLayOut />} />
            
            <Route path="*" element={<PageNotFound />} />
        </Routes> 
    )
}
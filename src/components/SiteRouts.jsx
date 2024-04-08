import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
// import Product from '../products/Product';
import PageNotFound from '../Pages/PageNotFound';

export default function SiteRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/products" element={<Product />} /> */}
            <Route path="*" element={<PageNotFound />} />
        </Routes> 
    )
}
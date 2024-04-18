import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import PageNotFound from '../Pages/PageNotFound';
import { Category, Product, ProductLayOut, Products } from '../products';
import Login from '../Pages/Login';
import Fav from '../Pages/Fav';
import PrivateRoute from '../PrivateRoute';
export default function SiteRoutes({handleLogin, user}) {
    return(
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductLayOut  />}> 
            <Route index={true} element={<Products  user={user} />} />
            <Route path="category/:categoryName" element={<Category user={user}/>} />
            <Route path="product/:productId" element={<Product user={user} />} />
            </Route>
            <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/Fav" element={<PrivateRoute user={user}><Fav /></PrivateRoute>} />

            <Route path="*" element={<PageNotFound />} />
        </Routes> 
    )
}
import { Route, Routes } from "react-router-dom"
import { HomePage, ProductDetail } from "../pages"
import { ProductsList } from "../pages"
import { Login } from "../pages"
import { Register } from "../pages"
import { CartPage } from "../pages/Cart/CartPage"



export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsList />} />
            <Route path="/Products/:id" element={<ProductDetail />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<CartPage/>} />

        </Routes>
    )
}



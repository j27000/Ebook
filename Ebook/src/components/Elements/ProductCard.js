import { Link } from "react-router-dom"
import { Stars } from "./Stars";
import { useCart } from "../../Context/CartContext";
import { useState, useEffect } from "react";
export const ProductCard = ({ product }) => {
    const { id, name, overview, poster, best_seller, rating, price } = product;
    const { addProduct, CartList, removeProduct } = useCart();
    const [add, notadd] = useState(false);
    useEffect(() => {
        const FindProduct = CartList.find((item) => (product.id === item.id))
        if (FindProduct) {
            notadd(true);
        }
        else {
            notadd(false);
        }

    }, [CartList, product.id])
    return (

        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`${id}`} className="relative" >
                {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}

                <img className="rounded-t-lg w-full h-64" src={poster} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

                <Stars key={id} rating={rating} />



                <p className="flex justify-between items-center">
                    <span className="text-2xl dark:text-gray-200">
                        <span>$</span><span>{price}</span>
                    </span>



                    {!add ? <button onClick={() => (addProduct(product))} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800$`} disabled={product.in_stock ? "" : "disabled"}>AddToCart <i className="ml-1 bi bi-plus-lg"></i></button> : <button onClick={() => removeProduct(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800`} disabled={product.in_stock ? "" : "disabled"}>remove From Cart</button>}
                </p>
            </div>
        </div>
    )
}

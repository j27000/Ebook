import { useCart } from "../../../Context/CartContext"
import { Link } from "react-router-dom"

export const CartCard = ({ product }) => {
  const { name, poster, price } = product
  const { removeProduct } = useCart();
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link href="">
          <img className="w-32 rounded" src={poster} alt="" />
        </Link>
        <div className="">
          <Link >
            <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
          </Link>
          <button onClick={() => (removeProduct(product))} className="text-base ml-2 text-red-400">Remove</button>
        </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${price}</span>
      </div>
    </div>
  )
}

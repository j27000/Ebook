import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Search } from "../Sections/Search"
import { useState } from "react"
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut"
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn"
import { useCart } from "../../Context/CartContext"


export const Header = () => {
    const [set, notset] = useState(false);
    const [drop, notdrop] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const { CartList } = useCart();
    return (
        <header>
            <nav className="bg-white dark:bg-gray-900">
                <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-10" alt="CodeBook Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div className="flex items-center relative">
                        <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                        <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search" onClick={() => (notset(!set))}></span>
                        <Link to="/Cart" className="text-gray-700 dark:text-white mr-5">
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{CartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => (notdrop(!drop))} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        {drop && (token ? <DropdownLoggedIn /> : <DropdownLoggedOut />)}
                    </div>
                </div>
                {set ? <Search notset={notset} /> : null}
            </nav>
        </header>
    )
}
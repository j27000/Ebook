import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
export const Header = () => {
  return (
    <div>


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 " >
          <Link to={"/"} className="flex items-center  space-x-3 rtl:space-x-reverse dark:text-white hover:underline">
            <img src={logo} className="h-10 text-2xl" alt="Ebook" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
          </Link>
          <div className="flex-row-reverse mx-0">

            <Link>
              <span className="bi bi-cart-dash-fill text-2xl m-2 text-gray-500 dark:text-white flex-row-reverse"> </span>
              <span className="bi bi-search  text-2xl m-2 text-gray-500 dark:text-white flex-row-reverse"> </span>
              <span className="bi bi-gear-wide-connected text-2xl m-2 text-gray-500 dark:text-white flex-row-reverse "></span>
              <span className="bi bi-person-circle text-2xl m-2 dark:text-white flex-row-reverse "> </span>

            </Link>



          </div>
        </div>
      </nav>


    </div>
  )
}



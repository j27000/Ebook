import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Stars } from "../components/Elements/Stars";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [show, setshow] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    async function found() {
      const data = await fetch(`http://localhost:8000/products/${id}`);
      const response = await data.json();
      console.log(response);
      setProduct(response);

    }
    found();


  }, [id])


  return (
    <main>
      <section>

        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-black">{product.name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 text-black">{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.
              image_local} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 text-black">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                {<Stars rating={product.rating} />}
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller ? < span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> : null}

              <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.in_stock ? "INSTOCK" : "OUT OF STOCK"}</span>

              {/* <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2"></span> */}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size}Mb</span>
            </p>
            <p className="my-3">
              <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
              {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
            <p className="text-lg text-gray-900 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.
            </p>
          </div>
        </div>
      </section>
    </main >
  )
}

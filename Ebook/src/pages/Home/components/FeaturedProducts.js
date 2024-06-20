import { ProductCard } from "../../../components/Elements/ProductCard"
export const FeaturedProducts = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold text-black-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

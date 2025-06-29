import PopularProduct from "./PopularProduct"

const PopularProducts = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto m-10">
      <h1 className="text-3xl font-semibold pb-10">Popular Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-0 mx-10 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />

        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />

        <PopularProduct />
        <PopularProduct />
      </div>
    </div>
  )
}

export default PopularProducts
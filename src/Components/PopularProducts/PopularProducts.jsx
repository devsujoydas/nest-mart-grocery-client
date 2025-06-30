import PopularProduct from "./PopularProduct"

const PopularProducts = () => {
  const btnStyles = "text-black active:scale-95 hover:-translate-y-1 duration-300 transition-all hover:text-emerald-400"

  return (
    <div className="max-w-screen-2xl lg:mx-auto font-family-primary">
 
      <div className=" my-10 flex justify-between litems-center  flex-wrap gap-3 lg:gap-8">
        <h1 className="md:text-4xl text-2xl font-bold">Popular Product</h1>
        <div className="flex justify-center items-center font-semibold lg:gap-8 gap-x-4 gap-y-1 flex-wrap md:text-lg text-xs">
          <a href="#" className={btnStyles}>All</a>
          <a href="#" className={btnStyles}>Milks & Dairies</a>
          <a href="#" className={btnStyles}>Coffes & Teas</a>
          <a href="#" className={btnStyles}>Pet Foods</a>
          <a href="#" className={btnStyles}>Meats</a>
          <a href="#" className={btnStyles}>Vegetables</a>
          <a href="#" className={btnStyles}>Fruits</a>
        </div>
      </div>


      <div className="grid grid-cols-2 md:mt-0 -mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-5 gap-3">
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
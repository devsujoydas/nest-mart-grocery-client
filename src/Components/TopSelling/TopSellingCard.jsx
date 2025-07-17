
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
const TopSelling = ({ titile, product }) => {


  return (
    <div>
      <div>
        <h1 className="md:text-3xl text-2xl font-bold border-b-2 border-emerald-600 mb-5 pb-2">{titile}</h1>

        <div className="grid md:grid-rows-3 md:gap-4 gap-1">

          {product.map((pro, idx) => (
            <div key={idx}
              className="flex items-center md:gap-4 gap-2 rounded-lg hover:shadow-lg hover:-translate-y-1 transition p-2 border border-zinc-200
            ">
              <img className="md:w-22 w-18 rounded-lg" src={pro.img1} alt="" />
              <div>
                <Link to={`/product/${pro.SL}`}>
                  <h1 className="font-bold cursor-pointer hover:text-emerald-500 active:text-emerald-500 transition-all duration-500 md:mb-1 md:text-[16px] text-sm">{pro.title}</h1>
                </Link>
                <div className="flex text-orange-300 text-sm">
                  <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                </div>
                <div className="flex justify-between items-center md:mt-2 mt-1">
                  <h1 className="text-emerald-500 font-bold text-sm md:text-lg">${pro.price}</h1>
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default TopSelling
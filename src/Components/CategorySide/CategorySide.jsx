import TrandingProductsTemplate from "../TopSelling/TrandingProductsTemplate"
import Category from "./Category"
import FillByPrice from "./FillByPrice"
import Organic from "./Organic"

 

const CategorySide = () => {
    return (
        <div className='grid gap-5 sticky top-[2vh] h-fit'>
            <Category />
            <FillByPrice />
            <TrandingProductsTemplate />
            <Organic /> 
        </div>
    )
}

export default CategorySide
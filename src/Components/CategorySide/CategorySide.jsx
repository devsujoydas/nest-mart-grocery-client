import Category from "./Category"
import FillByPrice from "./FillByPrice"
import Organic from "./Organic"

 

const CategorySide = () => {
    return (
        <div className='grid gap-5 sticky top-0 h-fit'>
            <Category />
            <FillByPrice />
            <Organic /> 
        </div>
    )
}

export default CategorySide
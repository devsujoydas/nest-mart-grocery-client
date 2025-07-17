
const Description = ({ productDetails }) => {

    const { quantity, description, TypeOfPacking, Color, Alcohol, PieceInOne, packagingDelivery, suggestedUse, otherIngredients, warnings, } = productDetails;


    return (
        <div className='space-y-3 md:space-y-10'>
            <div className='mt-5 md:mt-10'>
                <p className='text-zinc-500 text-sm md:text-[16px]  '>{description}</p>
            </div>

            <div className='text-zinc-500 text-sm flex md:gap-10 gap-3 '>
                <div className='grid gap-2 md:gap-3'>
                    <li>Type Of Packing</li>
                    <li>Color</li>
                    <li>Quantity Per Case</li>
                    <li>Ethyl Alcoho</li>
                    <li>Piece In One</li>
                </div>
                <div className='grid gap-2 md:gap-3'>
                    <p>{TypeOfPacking}</p>
                    <div className='flex gap-1'>{Color.map((cl, idx) => <p key={idx}>{cl},</p>)}</div>
                    <p>{quantity}</p>
                    <p>{Alcohol}</p>
                    <p>{PieceInOne}</p>
                </div>
            </div>

            <div>
                <h1 className=' text-xl md:text-3xl font-bold font-family-primary text-zinc-600 '>Packaging & Delivery</h1>
                <hr className='text-zinc-300 my-2 md:my-3' />
                <p className="text-zinc-500 text-sm md:text-[16px]">{packagingDelivery}</p>
            </div>

            <div>
                <h1 className=' text-xl md:text-3xl font-bold font-family-primary text-zinc-600 '>Suggested Use</h1>
                <hr className='text-zinc-300 my-2 md:my-3' />
                <p className="text-zinc-500 text-sm md:text-[16px]">{suggestedUse}</p>
            </div>

            <div>
                <h1 className=' text-xl md:text-3xl font-bold font-family-primary text-zinc-600 '>Other Ingredients</h1>
                <hr className='text-zinc-300 my-2 md:my-3' />
                <p className="text-zinc-500 text-sm md:text-[16px]">{otherIngredients}</p>
            </div>

            <div>
                <h1 className=' text-xl md:text-3xl font-bold font-family-primary text-zinc-600 '>Warnings</h1>
                <hr className='text-zinc-300 my-2 md:my-3' />
                <p className="text-zinc-500 text-sm md:text-[16px]">{warnings}</p>
            </div>
        </div>
    )
}

export default Description
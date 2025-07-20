

const Card = ({ card }) => {

    return (
        <div className={` card sticky top-[8vh] `}>

            <div className="flex flex-col gap-5 justify-center items-center rounded-2xl bg-[#503e32] overflow-hidden  md:px-0 px-3 py-[18vh]">

                <img src={card.image} alt="" className='md:w-70 w-40 object-cover' />

                <div className='text-center uppercase font-family-primary'>
                    <h1 className='text-white text-2xl md:text-7xl font-thin'>{card.title}</h1>
                    <h1 className='text-white text-2xl md:text-7xl font-bold'>{card.title2}</h1>
                </div>
                <p className='text-white text-sm mt-5 text-center'>{card.description}</p>
            </div>
        </div>
    )
}

export default Card
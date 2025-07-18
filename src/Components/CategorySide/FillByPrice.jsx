import React from 'react'

const FillByPrice = () => {
    return (
        <div className='border border-zinc-200 shadow-md  rounded-2xl p-3 md:p-7'>
            <h1 className='text-2xl font-family-primary font-bold text-zinc-600'>Fill by price</h1>
            <hr className='text-zinc-300 my-3' />

            <div className='grid gap-5'>
                <div className='grid gap-2'>
                    <h1 className='font-bold'>Color</h1>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='red' type="checkbox" />
                        <label htmlFor="red" className='cursor-pointer'>Red (56)</label>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='Green' type="checkbox" />
                        <label htmlFor="Green" className='cursor-pointer'>Green (78)</label>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='Blue' type="checkbox" />
                        <label htmlFor="Blue" className='cursor-pointer'>Blue (54)</label>
                    </div>
                </div>

                <div className='grid gap-2'>
                    <h1 className='font-bold'>Item Condition</h1>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='New' type="checkbox" />
                        <label htmlFor="New" className='cursor-pointer'>New (1506)</label>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='Refurbished' type="checkbox" />
                        <label htmlFor="Refurbished" className='cursor-pointer'>Refurbished (27)</label>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <input id='Used' type="checkbox" />
                        <label htmlFor="Used" className='cursor-pointer'>Used (45)</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillByPrice
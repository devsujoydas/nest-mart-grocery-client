import React, { useContext, useEffect, useState } from 'react'
import DealsProduct from './DealsProduct'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";




const DealsOfTheDay = () => {

    const products = [
        {
            "SL": "product 1",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png",
            "status": "",
            "categories": "",
            "title": "",
            "ratings": "",
            "by": "",
            "price": "",
            "prevPrice": "",
            "discountPercent": "",
        },
        {
            "SL": "product 2",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
            "status": "",
            "categories": "",
            "title": "",
            "ratings": "",
            "by": "",
            "price": "",
            "prevPrice": "",
            "discountPercent": "",
        },
        {
            "SL": "product 3",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
            "status": "",
            "categories": "",
            "title": "",
            "ratings": "",
            "by": "",
            "price": "",
            "prevPrice": "",
            "discountPercent": "",
        },
        {
            "SL": "product 4",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png",
            "status": "",
            "categories": "",
            "title": "",
            "ratings": "",
            "by": "",
            "price": "",
            "prevPrice": "",
            "discountPercent": "",
        },
    ]



    return (
        <div className='max-w-screen-2xl mx-auto'>
            <h1 className="md:text-4xl text-2xl font-bold font-family-primary">Deals Of The Day</h1>

            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 py-10'>
                {
                    products.map((product, idx) => <DealsProduct product={product} />)
                }
            </div>
        </div>
    )
}

export default DealsOfTheDay
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
            "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            "ratings": "4.5",
            "by": "NestFood",
            "price": "32.85",
            "prevPrice": "33.8",
            "days": "42",
            "hours": "12",
            "mins": "53",
            "sec": "23",
        },
        {
            "SL": "product 2",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
            "title": "Perdue Simply Smart Organics Gluten Free",
            "ratings": "4.5",
            "by": "Old El Paso",
            "price": "24.85",
            "prevPrice": "26.8",
            "days": "56",
            "hours": "21",
            "mins": "54",
            "sec": "21",
        },
        {
            "SL": "product 3",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
            "title": "Signature Wood-Fired Mushroom and Caramelized",
            "ratings": "4.5",
            "by": "Progresso",
            "price": "12.85 ",
            "prevPrice": "13.8",
            "days": "12",
            "hours": "05",
            "mins": "45",
            "sec": "36",
        },
        {
            "SL": "product 4",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png",
            "title": "Simply Lemonade with Raspberry Juice",
            "ratings": "3.5",
            "by": "Yoplait",
            "price": "12.85 ",
            "prevPrice": "13.95",
            "days": "68",
            "hours": "07",
            "mins": "54",
            "sec": "01",
        },
    ]



    return (
        <div className='max-w-screen-2xl 2xl:mx-auto  md:mx-10 mx-3'>
            <h1 className="md:text-4xl text-2xl font-bold font-family-primary">Deals Of The Day</h1>

            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 py-10'>
                {
                    products.map((product, idx) => <DealsProduct key={idx} product={product} />)
                }
            </div>
        </div>
    )
}

export default DealsOfTheDay
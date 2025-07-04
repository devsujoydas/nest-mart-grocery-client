
const Servicess = () => {
    const serviceData = [
        {
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-1.svg",
            "titile": "Best prices & offers",
            "desc": "Orders $50 or more"
        },
        {
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-2.svg",
            "titile": "Free delivery",
            "desc": "24/7 amazing services"
        },
        {
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-3.svg",
            "titile": "Great daily deal",
            "desc": "When you sign up"
        },
        {
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-4.svg",
            "titile": "Wide assortment",
            "desc": "Mega Discounts"
        },
        {
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/icon-5.svg",
            "titile": "Easy returns",
            "desc": "Within 30 days"
        },
    ]

    return (
        <div className="md:mx-10 2xl:mx-0 mx-3">
            <div className="max-w-screen-2xl lg:mx-auto  ">
                <div id="services" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-3 font-family-primary">
                    {serviceData.map((service, idx) => (
                        <div className=" group flex cursor-pointer gap-4 items-center  bg-[#edf0f19a] p-3 md:px-4 py-6 rounded-lg ">

                            <div className="flex justify-center items-center">
                                <img className="group-hover:-translate-y-2 transition md:w-14 w-10 duration-500" src={service.img} alt="" />
                            </div>
                            <div>
                                <p className="font-bold md:text-lg text-sm">{service.titile}</p>
                                <p className="text-zinc-400 font-medium md:text-[14px] text-xs">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Servicess
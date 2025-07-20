import React, { useEffect } from 'react'
import Card from './Card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)



const GsapScroolAnimation = () => {

    const cards = [
        {
            id: 1,
            image: "https://tympanus.net/Development/StickySections/img/1.png",
            title: "The",
            title2: "Algorithm",
            description: "The algorithm's workings are shrouded in complexity.",
            color: "#2F251E"
        },
        {
            id: 2,
            image: "https://tympanus.net/Development/StickySections/img/2.png",
            title: "The",
            title2: "Dogma",
            description: "The dogma is a set of beliefs that are held to be true.",
            color: "#42382E"
        },
        {
            id: 3,
            image: "https://tympanus.net/Development/StickySections/img/3.png",
            title: "The",
            title2: "Architects",
            description: "The elusive entities, lacking human form, operate in the shadows.",
            color: "#2F251E"
        },
        {
            id: 4,
            image: "https://tympanus.net/Development/StickySections/img/4.png",
            title: "The",
            title2: "Wasteland",
            description: "The wasteland is a desolate and barren landscape.",
            color: "#42382E"
        },
        {
            id: 5,
            image: "https://tympanus.net/Development/StickySections/img/5.png",
            title: "The",
            title2: "Narrative",
            description: "The narrative is a story that is told.",
            color: "#2F251E"
        },
        {
            id: 6,
            image: "https://tympanus.net/Development/StickySections/img/6.png",
            title: "The",
            title2: "Opulence",
            description: "The opulence is a state of being.",
            color: "#42382E"
        },
    ]


    useEffect(() => {
        gsap.utils.toArray('.card').forEach((card) => {
            gsap.to(card, {
                scale: 0.8,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 8%',
                    end: 'bottom 8%',
                    scrub: true,
                }
            })
        })
    }, [])

    return (
        <div className='w-full h-full bg-zinc-900  '>

            <div className=' h-screen flex lg:flex-row relative flex-col justify-center overflow-x-hidden items-center text-white '>

                <img className='lg:hidden w-1/2 mb-5' src="https://tympanus.net/Development/StickySections/img/2.png" alt="" />

                <p className=' text-2xl lg:text-left text-center md:text-9xl font-thin w-full font-family-primary md:px-0 px-3 lg:ml-10 uppercase'>The <span className='font-bold'>Narrative</span></p>

                <div className='lg:block hidden '>
                    <img className=' absolute top-50 w-[650px] -right-60' src="https://tympanus.net/Development/StickySections/img/2.png" alt="" />
                </div>
            </div>



            <div className='w-full h-[30vh] md:h-[50vh]  flex justify-center items-center text-white '>
                <p className='md:text-5xl text-2xl font-bold font-family-primary lg:px-0 md:px-20 px-3 lg:w-1/2'>As data conglomerates reveled in the opulence of cognitive wealth, a silent underclass manifested, condemned to the digital periphery.</p>
            </div>

            <main className=' max-w-125 mx-auto grid gap-20 md:px-0 px-3 py-[15vh]'>
                {cards.map((card, idx) => <Card key={idx} card={card} />)}
            </main>

            <div className='w-full h-[30vh] md:h-[50vh] flex justify-center items-center text-white '>
                <p className='md:text-5xl text-2xl font-bold font-family-primary lg:px-0 md:px-20 px-3 lg:w-1/2'>Lost in perpetual dependency, inhabitants of the Synthetic Era found solace in cryptic simulations, where pain ebbed and cognitive loads momentarily lightened.</p>
            </div>

            <div className='flex justify-center items-center md:items-start w-full h-[50vh] md:h-[70vh]'>
                <img className='md:w-1/6 w-1/3' src="https://tympanus.net/Development/StickySections/img/3.png" alt="" />
            </div>
        </div>
    )
}

export default GsapScroolAnimation
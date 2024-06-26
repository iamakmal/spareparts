import React from 'react'

export default function Provide() {

    const data = [
        {
            title: "Synthetic Oil For Automobile Engines",
            body: "The best synthetic oil for your engine from various brands like Shell, Honda, Toyota..",
            image: "provide1.jpg"
        },
        {
            title: "Alloy Wheels and Tubeless Tyres",
            body: "The best tyres for all your needs from various brands like Pirelli, Michelin, Bridgestone..",
            image: "provide2.jpg"
        },
        {
            title: "Automobile Parts & Accessories ",
            body: "The best spare parts and accessories for all vehicle models",
            image: "provide3.jpg"
        }
    ]


    return (
        <>
        <h1 className="text-5xl text-center mt-10">We Provide</h1>
        <h2 className="text-lg text-center text-gray-500 mb-10">Only the best for our customers</h2>
        <div className="flex justify-evenly items-center flex-wrap mb-10 m-5 gap-5">
            {
                data.map((provide, index) => (
                    <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src={provide.image}
                                alt="image for provide" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{provide.title}</h2>
                            <p>{provide.body}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}

import React from 'react'

export default function Testimonial() {

    const testimonials = [
        {
            message: "Finding rare parts for my vintage car was a hassle until I discovered Tyke. Their knowledgeable staff and excellent inventory made my restoration project a breeze!",
            name: "Lisa Mathews",
            occupation: "Car Enthusiast",
            image: "avatar2.png"
        },
        {
            message: "Managing a fleet of vehicles requires a dependable parts supplier. Tyke consistently provides high-quality parts at competitive prices, ensuring minimal downtime for our operations.",
            name: "Tom Riley",
            occupation: "Fleet Manager",
            image: "avatar3.png"
        },
        {
            message: "As a DIY mechanic, I appreciate the support and expertise of the team at Tyke. Their guidance has been invaluable, and their parts always meet my needs.",
            name: "Emily Simon",
            occupation: "DIY Mechanic",
            image: "avatar5.png"
        },
        {
            message: "Running a busy garage means we need a reliable parts supplier. Tyke delivers on time, every time, with parts that meet our high standards. Highly recommended!",
            name: "Mike Smith",
            occupation: "Garage Owner",
            image: "avatar4.png"
        },
        {
            message: "I've been sourcing parts from Tyke for years. Their reliability and quality are unmatched, and they always have what I need in stock.",
            name: "John Dickerson",
            occupation: "Auto Mechanic",
            image: "avatar1.png"
        },
    ]

    return (
        <>
            <h1 className="text-5xl text-center mt-10">What Our Customers Say</h1>
            <h2 className="text-lg text-center text-gray-500 mb-10">Don't take our word for it</h2>
            
            <div className="flex justify-center items-center flex-wrap m-10 gap-5 p-5">
            {
                testimonials.map((testimonial)=>(
                    <div className="bg-[#F3F5F7] rounded-lg w-72 lg:w-96 p-5">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-12 w-12 text-[#364CE7]"
                    >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>
                    <p className="text-base lg:text-lg">{testimonial.message}</p>
                    <div className="flex mt-5 justify-start gap-5 items-center">
                        <img src={testimonial.image} className="h-20 w-20 rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                            <h1>{testimonial.occupation}</h1>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </>
    )
}

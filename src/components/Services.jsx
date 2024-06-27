import React from 'react'

export default function Services() {

    const services = [
        {
            name: "Suspension Check",
            image: "service-suspension.jpg"
        },
        {
            name: "Engine Oil Change",
            image: "service-oil.jpg"
        },
        {
            name: "Engine Scan",
            image: "service-scan.png"
        },
        {
            name: "Wheel Alignment",
            image: "service-wheel.jpg"
        },
        {
            name: "Engine Inspection",
            image: "service-engine.png"
        },
    ]

  return (
    <>
        <h1 className="text-5xl text-center mt-10">Our Services</h1>
        <h2 className="text-lg text-center text-gray-500 mb-10">One-stop place for all your car maintenance needs</h2>
        <div className="flex justify-center items-center flex-wrap mb-10 m-5 gap-5">
        {
            services.map((service)=>(
                <div className="flex flex-col items-center gap-5 bg-base-100 w-fit p-5">
                <img src={service.image} className='h-56 w-56 object-cover rounded-lg'/>
                <h1 className="text-xl font-semibold">{service.name}</h1>
                </div>
            ))
        }
        </div>
    </>
  )
}

import React from 'react'

export default function Products() {

    const products = [
        {
            name: "Break Pads",
            image: "breakpads.jpg",
            price: "1000"
        },
        {
            name: "Water PVC Hose",
            image: "pvchose.jpg",
            price: "800"
        },
        {
            name: "Drive Shaft",
            image: "driveshaft.jpg",
            price: "500"
        },
        {
            name: "Engine Starter",
            image: "enginestarter.jpg",
            price: "18500"
        },
        {
            name: "Brake Stabiliser",
            image: "brakestabiliser.jpg",
            price: "500"
        },
        {
            name: "Compressor",
            image: "compressor.jpg",
            price: "2500"
        },
        {
            name: "Head Light Bulb",
            image: "headlightbulb.jpg",
            price: "500"
        },
        {
            name: "Clutch Plate",
            image: "clutchplate.jpg",
            price: "500"
        },
        {
            name: "Motor Oil",
            image: "motoroil.jpg",
            price: "5000"
        },
        {
            name: "Car Battery",
            image: "carbattery.jpg",
            price: "8000"
        },
        {
            name: "Brake Disc",
            image: "brakedisk.jpg",
            price: "12000"
        },
        {
            name: "Spark Plug",
            image: "sparkplug.jpg",
            price: "1000"
        },
        {
            name: "Shock Absorber",
            image: "shorkabsorber.jpg",
            price: "12000"
        },
        {
            name: "Oil Filter",
            image: "oilfilter.jpg",
            price: "1000"
        }
    ]

  return (
    <>
    <h1 className="text-5xl text-center mt-10">Our Products</h1>
    <h2 className="text-lg text-center text-gray-500 mb-10">All your needs at one place</h2>
    <div className="flex justify-evenly items-center flex-wrap mb-10 m-5 gap-5">
    {
        products.map((product)=>(
            <div className="flex card flex-row items-center bg-base-100 w-fit shadow-lg p-5">
            <img src={product.image} className='h-fit w-40'/>
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <h1 className="text-lg">Rs.{product.price}</h1>
                <button className="btn btn-outline w-fit hover:bg-yellow-500">View More</button>
            </div>
            </div>
        ))
    }
    </div>
    </>
  )
}

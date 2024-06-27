import React, { useState } from 'react'

export default function Products() {
    const[currentPage, setCurrentPage] = useState(1);
    const[productsPerPage,setProductsPerPage] = useState(4);

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

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

    const totalPages = Math.ceil(products.length/productsPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

  return (
    <>
    <h1 className="text-5xl text-center mt-10">Our Products</h1>
    <h2 className="text-lg text-center text-gray-500 mb-10">All your needs at one place</h2>
    <div className="flex justify-center items-center flex-wrap mb-10 m-5 gap-5">
    {
        currentProducts.map((product, index)=>(
            <div key={index} className="flex card flex-row items-center bg-base-100 w-fit shadow-lg p-5">
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
    <div className="flex justify-center mb-10">
    <nav>
        <ul className="flex list-none gap-2 join">
        {
            [...Array(totalPages)].map((_,index) => (
                <li key={index}>
                    <button onClick={() => paginate(index + 1)} className={`join-item btn btn-outline ${currentPage === index+1 ? 'bg-yellow-500 text-white' : ''}`}>
                        {index + 1}
                    </button>
                </li>
            ))
        }
        </ul>
    </nav>
    </div>
    </>
  )
}

//Using for loop instead of [...Array(totalPages)]

// const pageItems = [];
// for (let i = 1; i <= totalPages; i++) {
//     pageItems.push(
//       <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
//         <button onClick={() => paginate(i)} className="btn btn-outline">
//           {i}
//         </button>
//       </li>
//     );
//   }
  
//   return <ul className="pagination">{pageItems}</ul>;
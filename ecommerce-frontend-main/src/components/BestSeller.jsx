import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

  // ✅ original context intact
  const { products } = useContext(ShopContext)

  // ✅ original state intact
  const [bestSeller, setBestSeller] = useState([])


  // ✅ original logic intact
  useEffect(() => {

    const BestProduct = products.filter(
      (item) => item.bestseller
    )

    setBestSeller(BestProduct.slice(0, 5))

  }, [products])



  return (

    <div className='
      my-10
      px-[4%]
    '>

      {/* Title Section */}
      <div className='
        py-6
        text-3xl
        text-center
      '>

        <Title text1={'BEST'} text2={'SELLERS'} />


        {/* Description */}
        <p className='
          w-3/4
          sm:w-2/3
          md:w-1/2

          m-auto
          mt-2

          text-xs
          sm:text-sm
          md:text-base

          italic
          text-gray-600
        '>
          Explore our most-loved products, chosen by thousands of happy customers for their style and quality.
        </p>


        {/* Premium underline */}
        <div className='
          w-16
          h-[2px]
          bg-black
          mx-auto
          mt-3
        '></div>

      </div>



      {/* Products Grid (original structure intact) */}
      <div className='
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5

        gap-4
        gap-y-6
      '>

        {bestSeller.map((item, index) => (

          <div
            key={index}
            className='
              hover:-translate-y-2
              transition-all
              duration-300
            '
          >

            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />

          </div>

        ))}

      </div>

    </div>

  )
}

export default BestSeller

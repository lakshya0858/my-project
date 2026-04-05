import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  // ✅ original context intact
  const { products } = useContext(ShopContext)

  // ✅ original state intact
  const [latestProducts, setlatestProducts] = useState([])


  // ✅ original useEffect intact
  useEffect(() => {

    setlatestProducts(products.slice(0, 10))

  }, [products])



  return (

    <div className='
      my-14
      px-[4%]
    '>

      {/* Title Section (original intact) */}
      <div className='
        flex
        flex-col
        items-center
        py-6
        text-center
      '>

        <Title text1={'LATEST'} text2={'COLLECTIONS'} />


        {/* description */}
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
          Discover our hand-picked selection of the season’s most sought-after styles, crafted for elegance and comfort.
        </p>


        {/* premium underline */}
        <div className='
          w-16
          h-[2px]
          bg-black
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

        {latestProducts.map((item, index) => (

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

export default LatestCollection

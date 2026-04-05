import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

    // ✅ original context intact
    const { currency } = useContext(ShopContext)


    return (
        <Link
            onClick={() => scrollTo(0, 0)}
            className='
                text-gray-700
                cursor-pointer
                block
                bg-white
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                group
            '
            to={`/product/${id}`}
        >

            {/* Image container (original structure intact) */}
            <div className='overflow-hidden'>

                <img
                    className='
                        w-full
                        h-64
                        object-cover
                        transition
                        ease-in-out
                        duration-500
                        group-hover:scale-110
                    '
                    src={image[0]}
                    alt={name}
                />

            </div>


            {/* Product info */}
            <div className='p-3'>

                {/* Product Name */}
                <p className='
                    pt-1
                    pb-1
                    text-sm
                    font-medium
                    text-gray-800
                    group-hover:text-black
                    transition
                '>
                    {name}
                </p>


                {/* Product Price (original logic intact) */}
                <p className='
                    text-sm
                    font-semibold
                    text-black
                '>
                    {currency}{price}
                </p>

            </div>

        </Link>
    )
}

export default ProductItem

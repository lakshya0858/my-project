import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {

    // ✅ original context intact
    const { products } = useContext(ShopContext)

    // ✅ original state intact
    const [related, setRelated] = useState([])


    // ✅ original logic intact
    useEffect(() => {

        if (products.length > 0) {

            let productsCopy = products.slice()

            productsCopy = productsCopy.filter(
                (item) => category === item.category
            )

            productsCopy = productsCopy.filter(
                (item) => subCategory === item.subCategory
            )

            setRelated(productsCopy.slice(0, 5))

        }

    }, [products, category, subCategory])



    return (
        <div className='
            my-24
            px-[4%]
        '>

            {/* Title Section */}
            <div className='
                py-2
                text-3xl
                text-center
                mb-8
            '>

                <Title text1={'RELATED'} text2={'PRODUCTS'} />

                {/* Premium underline */}
                <div className='
                    w-16
                    h-[2px]
                    bg-black
                    mx-auto
                    mt-2
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

                {related.map((item, index) => (

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
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />

                    </div>

                ))}

            </div>

        </div>
    )
}

export default RelatedProducts

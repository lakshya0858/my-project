import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {

  const { productId } = useParams()

  const { products, currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("M")



  useEffect(() => {

    const product = products.find(
      item => item._id === productId
    )

    if (product) {

      setProductData(product)
      setImage(product.image[0])

    }

  }, [productId, products])



  if (!productData) return null



  return (

    <div className="
      min-h-screen
      bg-gradient-to-b
      from-gray-50
      to-white

      px-[4%]
      py-10
    ">


      {/* Main Product */}
      <div className="
        grid
        lg:grid-cols-2

        gap-16

        max-w-[1300px]
        mx-auto
      ">


        {/* LEFT IMAGE SECTION */}
        <div>


          {/* Main Image */}
          <div className="
            rounded-2xl
            overflow-hidden

            shadow-xl

            bg-white
          ">

            <img
              src={image}

              className="
                w-full
                h-[550px]

                object-cover

                hover:scale-105

                transition
                duration-700
              "
            />

          </div>



          {/* Thumbnails */}
          <div className="
            flex
            gap-4
            mt-4
          ">

            {productData.image.map((img, index) => (

              <img
                key={index}
                src={img}

                onClick={() => setImage(img)}

                className={`
                  w-20
                  h-20

                  object-cover

                  rounded-lg

                  cursor-pointer

                  border-2

                  transition

                  ${image === img
                    ? "border-black scale-110"
                    : "border-gray-200 hover:border-black"}
                `}
              />

            ))}

          </div>


        </div>



        {/* RIGHT INFO SECTION */}
        <div className="flex flex-col justify-center">


          {/* Title */}
          <h1 className="
            text-4xl
            font-bold

            text-gray-900
          ">
            {productData.name}
          </h1>



          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">

            {[1,2,3,4].map(i => (
              <img key={i} src={assets.star_icon} className="w-5"/>
            ))}

            <img src={assets.star_dull_icon} className="w-5"/>

            <span className="ml-2 text-gray-500">
              (122 Reviews)
            </span>

          </div>



          {/* Price */}
          <div className="mt-6">

            <span className="
              text-4xl
              font-bold
              text-black
            ">
              {currency}{productData.price}
            </span>

          </div>



          {/* Description */}
          <p className="
            mt-6

            text-gray-600

            leading-relaxed

            max-w-lg
          ">
            {productData.description}
          </p>



          {/* Size */}
          <div className="mt-8">

            <p className="font-semibold mb-3">
              Select Size
            </p>


            <div className="flex gap-3">

              {productData.sizes.map((s, index) => (

                <button
                  key={index}

                  onClick={() => setSize(s)}

                  className={`
                    w-12
                    h-12

                    rounded-lg

                    border-2

                    font-medium

                    transition

                    ${size === s
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"}
                  `}
                >
                  {s}
                </button>

              ))}

            </div>

          </div>



          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}

            className="
              mt-8

              w-fit

              px-10
              py-4

              bg-black
              text-white

              rounded-full

              font-semibold

              shadow-lg

              hover:bg-gray-800
              hover:scale-105

              transition
            "
          >
            Add to Cart
          </button>



          {/* Features */}
          <div className="
            mt-10

            text-gray-500

            space-y-2
          ">

            <p>✔ 100% Original Product</p>

            <p>✔ Free Delivery Available</p>

            <p>✔ Easy 7 Day Returns</p>

          </div>


        </div>


      </div>



      {/* Related Products */}
      <div className="mt-24">

        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />

      </div>


    </div>

  )

}

export default Product

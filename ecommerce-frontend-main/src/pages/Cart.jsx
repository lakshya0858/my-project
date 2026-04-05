import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import { useNavigate } from "react-router-dom" // ✅ FIX

const Cart = () => {

  // ✅ FIX: useNavigate
  const navigate = useNavigate();

  // ❌ navigate removed from context
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
  } = useContext(ShopContext)


  const [cartData, setCartData] = useState([])


  useEffect(() => {

    if (products.length > 0) {

      const tempData = []

      for (const items in cartItems) {

        for (const size in cartItems[items]) {

          if (cartItems[items][size] > 0) {

            tempData.push({
              _id: items,
              size: size,
              quantity: cartItems[items][size],
            })

          }

        }

      }

      setCartData(tempData)

    }

  }, [cartItems, products])



  return (

    <div className="border-t pt-14 px-[4%] animate-fadeIn min-h-screen bg-gray-50">

      {/* Title */}
      <div className="mb-8 text-2xl font-bold">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>


      {cartData.length > 0 ? (

        <>

          {/* Cart Items */}
          <div className="bg-white rounded-xl shadow-sm border">

            {cartData.map((item, index) => {

              const productData = products.find(
                (product) => product._id === item._id
              )

              return (

                <div
                  key={index}
                  className="py-4 px-4 border-b text-gray-700 grid grid-cols-[4fr_1fr_0.5fr] items-center gap-4 hover:bg-gray-50 transition-all"
                >

                  {/* Product Info */}
                  <div className="flex items-start gap-6">

                    <img
                      className="w-16 sm:w-20 rounded-lg shadow-sm hover:scale-105 transition"
                      src={productData.image[0]}
                      alt={productData.name}
                    />

                    <div>

                      <p className="text-sm sm:text-lg font-semibold">
                        {productData.name}
                      </p>

                      <div className="flex items-center gap-4 mt-2">

                        <p className="font-medium">
                          {currency}{productData.price}
                        </p>

                        <p className="px-3 py-1 text-xs bg-gray-100 border rounded-full">
                          {item.size}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* Quantity */}
                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}

                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }

                    className="px-2 py-1 text-center border rounded-md w-14 focus:ring-2 focus:ring-black outline-none"
                  />


                  {/* Delete */}
                  <img
                    onClick={() =>
                      updateQuantity(item._id, item.size, 0)
                    }

                    className="w-5 cursor-pointer hover:scale-110 hover:opacity-70 transition"
                    src={assets.bin_icon}
                    alt="Delete"
                  />

                </div>

              )

            })}

          </div>


          {/* Cart Total */}
          <div className="flex justify-end my-16">

            <div className="w-full sm:w-[450px]">

              <CartTotal />

              {/* Checkout Button */}
              <div className="w-full text-end">

                <button
                  onClick={() => navigate("/place-order")} // ✅ WORKING

                  className="px-8 py-3 my-8 text-sm text-white bg-black rounded-full shadow-md hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all"
                >

                  PROCEED TO CHECKOUT →

                </button>

              </div>

            </div>

          </div>

        </>

      ) : (

        <div className="mt-16 text-center">

          <p className="text-lg text-gray-500">
            🛒 Your cart is empty. Start shopping now!
          </p>

        </div>

      )}

    </div>

  )
}

export default Cart
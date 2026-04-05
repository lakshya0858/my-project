import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    // ✅ original context intact
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)


    return (

        <div className='
            w-full
            max-w-md

            bg-white

            p-6

            rounded-xl

            shadow-sm
            hover:shadow-md

            border
            border-gray-200

            transition-all
            duration-300
        '>

            {/* Title (original intact) */}
            <div className='text-2xl mb-4'>

                <Title text1={'CART'} text2={'TOTALS'} />

            </div>



            {/* Price Details (original logic intact) */}
            <div className='
                flex
                flex-col
                gap-3

                mt-2

                text-sm
                text-gray-700
            '>

                {/* Subtotal */}
                <div className='flex justify-between'>

                    <p>Subtotal</p>

                    <p className='font-medium'>
                        {currency} {getCartAmount()}.00
                    </p>

                </div>


                <hr />


                {/* Shipping Fee */}
                <div className='flex justify-between'>

                    <p>Shipping Fee</p>

                    <p className='font-medium'>
                        {currency} {delivery_fee}.00
                    </p>

                </div>


                <hr />


                {/* Total */}
                <div className='
                    flex
                    justify-between

                    text-base
                    font-semibold

                    text-black
                '>

                    <b>Total</b>

                    <b>
                        {currency}
                        {' '}
                        {getCartAmount() === 0
                            ? 0
                            : getCartAmount() + delivery_fee}
                        .00
                    </b>

                </div>

            </div>



            {/* Optional checkout button (safe addition) */}
            <button className='
                w-full

                mt-6

                bg-black
                text-white

                py-2

                rounded-lg

                hover:bg-gray-800
                hover:scale-[1.02]

                active:scale-[0.98]

                transition-all
                duration-200
            '>
                Proceed to Checkout
            </button>

        </div>

    )
}

export default CartTotal

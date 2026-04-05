import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom' // ✅ FIX

const PlaceOrder = () => {

    const navigate = useNavigate(); // ✅ FIX

    const [method, setMethod] = useState('cod')

    const {
        cartItems,
        setCartItems,
        getCartAmount,
        delivery_fee,
        products,
        addOrder // ✅ NEW
    } = useContext(ShopContext)


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })


    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const onSubmitHandler = (event) => {

  event.preventDefault()

  if (Object.keys(cartItems).length === 0) {
    toast.error("Cart is empty")
    return
  }

  const orderItems = [];

  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {

      if (cartItems[itemId][size] > 0) {

        const product = products.find(p => p._id === itemId);

        orderItems.push({
          ...product,
          size: size,
          quantity: cartItems[itemId][size]
        });

      }
    }
  }

  addOrder(orderItems);

  navigate('/orders')
}

    return (

        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t px-[4%] bg-gray-50"
        >

            {/* LEFT */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-6 rounded-xl shadow-sm">

                <div className='my-3 text-xl font-semibold sm:text-2xl'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className='flex gap-3'>
                    <input required name='firstName' value={formData.firstName} onChange={onChangeHandler} className={inputBox} type="text" placeholder='First name' />
                    <input required name='lastName' value={formData.lastName} onChange={onChangeHandler} className={inputBox} type="text" placeholder='Last name' />
                </div>

                <input required name='email' value={formData.email} onChange={onChangeHandler} className={inputBox} type="email" placeholder='Email address' />
                <input required name='street' value={formData.street} onChange={onChangeHandler} className={inputBox} type="text" placeholder='Street' />

                <div className='flex gap-3'>
                    <input required name='city' value={formData.city} onChange={onChangeHandler} className={inputBox} type="text" placeholder='City' />
                    <input name='state' value={formData.state} onChange={onChangeHandler} className={inputBox} type="text" placeholder='State' />
                </div>

                <div className='flex gap-3'>
                    <input required name='zipcode' value={formData.zipcode} onChange={onChangeHandler} className={inputBox} type="number" placeholder='Zipcode' />
                    <input required name='country' value={formData.country} onChange={onChangeHandler} className={inputBox} type="text" placeholder='Country' />
                </div>

                <input required name='phone' value={formData.phone} onChange={onChangeHandler} className={inputBox} type="number" placeholder='Phone' />

            </div>


            {/* RIGHT */}
            <div className='mt-8 flex flex-col gap-6 w-full sm:max-w-[450px]'>

                <div className='p-5 bg-white shadow-sm rounded-xl'>
                    <CartTotal />
                </div>

                <div className='p-5 bg-white shadow-sm rounded-xl'>

                    <Title text1={'PAYMENT'} text2={'METHOD'} />

                    <div className='flex flex-col gap-3 mt-4'>

                        <PaymentOption label="Stripe" img={assets.stripe_logo} selected={method === 'stripe'} onClick={() => setMethod('stripe')} />

                        <PaymentOption label="Razorpay" img={assets.razorpay_logo} selected={method === 'razorpay'} onClick={() => setMethod('razorpay')} />

                        <PaymentOption label="Cash On Delivery" selected={method === 'cod'} onClick={() => setMethod('cod')} />

                    </div>

                    <div className='w-full mt-6 text-end'>

                        <button type='submit' className='px-12 py-3 text-sm text-white bg-black rounded-lg hover:bg-gray-800 hover:scale-[1.02] transition-all'>

                            PLACE ORDER

                        </button>

                    </div>

                </div>

            </div>

        </form>

    )
}



const PaymentOption = ({ label, img, selected, onClick }) => (

    <div onClick={onClick} className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:shadow-md transition-all ${selected ? 'border-green-500 bg-green-50' : ''}`}>

        <span className={`w-4 h-4 border rounded-full ${selected ? 'bg-green-500 border-green-500' : ''}`}></span>

        {img && <img className='h-5' src={img} alt={label} />}

        <span className='font-medium text-gray-700'>{label}</span>

    </div>

)



const inputBox = `
    border border-gray-300 rounded-lg py-2 px-3.5 w-full
    focus:ring-2 focus:ring-black outline-none transition-all
`

export default PlaceOrder
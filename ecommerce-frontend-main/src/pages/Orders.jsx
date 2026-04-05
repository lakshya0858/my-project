import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'

const Orders = () => {

  const { orders, currency } = useContext(ShopContext)
  const navigate = useNavigate();

  return (

    <div className="pt-10 border-t px-[4%] min-h-screen bg-gray-50">

      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border">

        {orders.length > 0 ? (

          orders.map((order, orderIndex) => (

            order.items.map((item, index) => (

              <div key={orderIndex + index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 px-4 border-b hover:bg-gray-50">

                <div className='flex items-start gap-6 text-sm'>

                  <img className="w-16 sm:w-20 rounded-lg" src={item.image[0]} alt="" />

                  <div>

                    <p className='font-medium'>{item.name}</p>

                    <div className='flex gap-3 mt-1'>
                      <p>{currency}{item.price}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>

                    <p className='text-gray-400'>
                      {new Date(order.date).toDateString()}
                    </p>

                    <p className='text-gray-400'>
                      {order.paymentMethod}
                    </p>

                  </div>

                </div>

                <div className='flex justify-between md:w-1/2 items-center'>

                  <div className='flex items-center gap-2'>
                    <span className='h-2 w-2 bg-green-500 rounded-full'></span>
                    <p>{order.status}</p>
                  </div>

                  <button
                    onClick={() => navigate(`/track-order/${order.id}`)}
                    className='px-4 py-2 border rounded-md hover:bg-black hover:text-white'
                  >
                    Track Order
                  </button>

                </div>

              </div>

            ))

          ))

        ) : (

          <p className='text-center py-10 text-gray-500'>
            No orders yet
          </p>

        )}

      </div>

    </div>
  )
}

export default Orders
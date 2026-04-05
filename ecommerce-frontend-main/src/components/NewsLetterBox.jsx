import React from 'react'

const NewsLetterBox = () => {

  // ✅ tumhara original submit handler intact
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (

    <div className='
      text-center
      my-24
      px-[4%]
    '>

      {/* Heading (original intact) */}
      <p className='
        text-2xl
        sm:text-3xl
        font-semibold
        text-gray-800
      '>
        Subscribe now & get 20% off
      </p>


      {/* Subtext (original intact) */}
      <p className='
        mt-2
        text-sm
        text-gray-500
        sm:text-base
      '>
        Join our mailing list for exclusive offers, style tips, and the latest arrivals — straight to your inbox.
      </p>



      {/* Email form (original structure intact) */}
      <form
        onSubmit={onSubmitHandler}
        className='
          flex
          items-center
          w-full
          sm:w-1/2
          mx-auto
          mt-6
          gap-2
          p-1

          bg-white
          border
          border-gray-300
          rounded-full
          shadow-sm

          hover:shadow-md
          focus-within:shadow-md

          transition-all
          duration-300
        '
      >

        {/* Input */}
        <input
          className='
            w-full
            px-4
            py-2
            text-sm
            text-gray-700
            bg-transparent
            rounded-full
            outline-none
            placeholder-gray-400
          '
          type='email'
          placeholder='Enter your email'
          required
        />


        {/* Button */}
        <button
          type='submit'
          className='
            px-6
            py-2
            text-sm
            font-medium
            text-white
            bg-black
            rounded-full

            hover:bg-gray-800
            hover:scale-105

            active:scale-95

            transition-all
            duration-200
          '
        >
          SUBSCRIBE
        </button>

      </form>

    </div>

  )
}

export default NewsLetterBox

import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {

  return (

    <section className="
      relative

      mx-[4%]
      mt-6

      rounded-2xl
      overflow-hidden

      bg-gradient-to-r
      from-black
      via-gray-900
      to-gray-800

      text-white
    ">

      <div className="
        flex
        flex-col
        lg:flex-row

        items-center

        min-h-[500px]
      ">


        {/* Left */}
        <div className="
          flex-1

          p-10
          lg:p-16
        ">

          <p className="
            text-sm

            tracking-widest

            text-gray-300
          ">
            NEW COLLECTION
          </p>


          <h1 className="
            text-4xl
            lg:text-6xl

            font-bold

            mt-4

            leading-tight
          ">
            Elevate Your <br/>
            Style Today
          </h1>


          <p className="
            mt-4

            text-gray-300

            max-w-md
          ">
            Discover premium fashion designed for modern lifestyle.
          </p>


          <button className="
            mt-6

            px-8
            py-3

            bg-white
            text-black

            rounded-full

            font-medium

            hover:scale-105

            transition
          ">
            Shop Now
          </button>

        </div>



        {/* Right */}
        <div className="
          flex-1

          h-full
        ">

          <img
            src={assets.hero_img}

            className="
              w-full
              h-full

              object-cover

              opacity-90
            "
          />

        </div>

      </div>

    </section>

  )

}

export default Hero

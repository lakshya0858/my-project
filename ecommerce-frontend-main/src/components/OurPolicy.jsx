import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {

  // ✅ tumhara original policies array intact
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "Hassle-free exchange within 7 days of delivery."
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "Free returns with no questions asked."
    },
    {
      icon: assets.support_img,
      title: "24/7 Customer Support",
      description: "We are here to help you anytime."
    }
  ]


  return (

    <section className="
      px-[4%]
      my-24
    ">

      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-6
        text-center
      ">

        {policies.map((policy, index) => (

          <div
            key={index}
            className="
              bg-white
              p-8
              rounded-2xl
              shadow-sm
              border border-gray-100

              hover:shadow-xl
              hover:-translate-y-2
              hover:border-gray-200

              transition-all
              duration-300

              cursor-pointer
              group
            "
          >

            {/* Icon (original intact) */}
            <img
              src={policy.icon}
              className="
                w-14
                mx-auto
                mb-4

                transition
                duration-300

                group-hover:scale-110
              "
              alt={policy.title}
            />


            {/* Title (original intact) */}
            <h3 className="
              font-semibold
              text-lg
              text-gray-900

              group-hover:text-black
              transition
            ">
              {policy.title}
            </h3>


            {/* Description (original intact) */}
            <p className="
              text-sm
              text-gray-500
              mt-2

              group-hover:text-gray-600
              transition
            ">
              {policy.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default OurPolicy

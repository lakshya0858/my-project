import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {

  return (

    <footer className="
      border-t
      border-gray-200
      bg-gray-50

      mt-24
    ">

      {/* Main Footer */}
      <div className="
        grid
        gap-10

        px-6
        py-12

        mx-auto
        max-w-7xl

        text-sm

        sm:grid-cols-3
      ">


        {/* Brand Info */}
        <div>

          <img
            src={assets.logo}
            className="
              mb-4
              w-28

              hover:scale-105

              transition
              duration-300
            "
            alt="Forever Logo"
          />


          <p className="
            leading-6
            text-gray-600
          ">
            Your go-to destination for premium quality fashion and accessories.
            The latest trends, timeless designs, and unmatched comfort — all in one place.
          </p>



          {/* Social Media (original intact) */}
          <div className="flex items-center gap-3 mt-4">

            <a
              href="#"
              className="
                p-2
                bg-gray-200
                rounded-full

                hover:bg-black
                hover:text-white
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaFacebookF size={13} />
            </a>


            <a
              href="#"
              className="
                p-2
                bg-gray-200
                rounded-full

                hover:bg-black
                hover:text-white
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaInstagram size={13} />
            </a>


            <a
              href="#"
              className="
                p-2
                bg-gray-200
                rounded-full

                hover:bg-black
                hover:text-white
                hover:scale-110

                transition-all
                duration-300
              "
            >
              <FaTwitter size={13} />
            </a>

          </div>

        </div>



        {/* Company Links */}
        <div>

          <h4 className="
            mb-3
            text-lg
            font-semibold
            text-gray-800
          ">
            Company
          </h4>


          <ul className="
            flex
            flex-col
            gap-2

            text-gray-600
          ">

            <li className="cursor-pointer hover:text-black hover:translate-x-1 transition-all">
              Home
            </li>

            <li className="cursor-pointer hover:text-black hover:translate-x-1 transition-all">
              About Us
            </li>

            <li className="cursor-pointer hover:text-black hover:translate-x-1 transition-all">
              Delivery
            </li>

            <li className="cursor-pointer hover:text-black hover:translate-x-1 transition-all">
              Privacy Policy
            </li>

          </ul>

        </div>



        {/* Contact Info */}
        <div>

          <h4 className="
            mb-3
            text-lg
            font-semibold
            text-gray-800
          ">
            Get in Touch
          </h4>


          <ul className="
            flex
            flex-col
            gap-2

            text-gray-600
          ">

            <li className="hover:text-black transition cursor-pointer">
              +91 887-987-2312
            </li>

            <li className="hover:text-black transition cursor-pointer">
              contact@foreveryou.com
            </li>

          </ul>

        </div>

      </div>



      {/* Bottom Bar (original intact) */}
      <div className="
        py-4

        text-xs
        text-center
        text-gray-500

        border-t
        border-gray-200
      ">

        © {new Date().getFullYear()} forever.com — All Rights Reserved

      </div>

    </footer>

  )
}

export default Footer

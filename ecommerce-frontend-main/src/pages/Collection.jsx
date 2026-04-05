import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  // ✅ original context intact
  const { products, search, showSearch } = useContext(ShopContext)

  // ✅ original states intact
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')



  // ✅ original toggleCategory intact
  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {

      setCategory(prev =>
        prev.filter(item => item !== e.target.value)
      )

    }
    else {

      setCategory(prev =>
        [...prev, e.target.value]
      )

    }

  }



  // ✅ original toggleSubCategory intact
  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {

      setSubCategory(prev =>
        prev.filter(item => item !== e.target.value)
      )

    }
    else {

      setSubCategory(prev =>
        [...prev, e.target.value]
      )

    }

  }



  // ✅ original applyFilter intact
  const applyFilter = () => {

    let productsCopy = products.slice()

    if (showSearch && search) {

      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )

    }

    if (category.length > 0) {

      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )

    }

    if (subCategory.length > 0) {

      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )

    }

    setFilterProducts(productsCopy)

  }



  // ✅ original sortProduct intact
  const sortProduct = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {

      case 'low-high':

        setFilterProducts(
          fpCopy.sort((a, b) => a.price - b.price)
        )
        break

      case 'high-low':

        setFilterProducts(
          fpCopy.sort((a, b) => b.price - a.price)
        )
        break

      default:

        applyFilter()
        break

    }

  }



  // ✅ original useEffects intact
  useEffect(() => {

    applyFilter()

  }, [category, subCategory, search, showSearch, products])



  useEffect(() => {

    sortProduct()

  }, [sortType])



  return (

    <div className="
      flex
      flex-col
      sm:flex-row

      gap-1
      sm:gap-10

      pt-10
      border-t

      px-[4%]

      min-h-screen
      bg-gray-50
    ">


      {/* Filter Options */}
      <div className="
        min-w-60
        bg-white
        p-4
        rounded-xl
        shadow-sm
        h-fit
      ">

        <p
          onClick={() => setShowFilter(!showFilter)}
          className="
            flex
            items-center
            gap-2

            my-2

            text-xl
            font-semibold

            cursor-pointer
            select-none
          "
        >

          FILTERS

          <img
            className={`
              h-3
              sm:hidden

              transition-transform
              duration-200

              ${showFilter ? 'rotate-90' : ''}
            `}
            src={assets.dropdown_icon}
            alt=""
          />

        </p>



        {/* Category Filter */}
        <div className={`
          border
          border-gray-300

          pl-5
          py-3

          mt-6

          rounded-lg
          shadow-sm

          transition-all
          duration-300

          ${showFilter
            ? 'opacity-100'
            : 'opacity-0 sm:opacity-100 hidden sm:block'}
        `}>

          <p className="mb-3 text-sm font-semibold text-gray-700">
            CATEGORIES
          </p>


          <div className="
            flex
            flex-col
            gap-2

            text-sm
            text-gray-700
          ">

            {['Men', 'Women', 'Kids'].map((cat) => (

              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >

                <input
                  className="w-3 accent-black cursor-pointer"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                />

                {cat}

              </label>

            ))}

          </div>

        </div>



        {/* SubCategory Filter */}
        <div className={`
          border
          border-gray-300

          pl-5
          py-3

          my-5

          rounded-lg
          shadow-sm

          transition-all
          duration-300

          ${showFilter
            ? 'opacity-100'
            : 'opacity-0 sm:opacity-100 hidden sm:block'}
        `}>

          <p className="mb-3 text-sm font-semibold text-gray-700">
            TYPE
          </p>


          <div className="
            flex
            flex-col
            gap-2

            text-sm
            text-gray-700
          ">

            {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (

              <label
                key={sub}
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >

                <input
                  className="w-3 accent-black cursor-pointer"
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                />

                {sub}

              </label>

            ))}

          </div>

        </div>

      </div>



      {/* Right Side */}
      <div className="flex-1">


        {/* Title & Sort */}
        <div className="
          flex
          flex-col
          sm:flex-row

          gap-4

          mb-6

          sm:items-center
          sm:justify-between
        ">

          <Title text1={'ALL'} text2={'COLLECTIONS'} />


          <select
            onChange={(e) => setSortType(e.target.value)}
            className="
              px-3
              py-2

              text-sm

              border
              border-gray-300

              rounded-md
              shadow-sm

              outline-none

              focus:ring-1
              focus:ring-black
            "
          >

            <option value="relavent">
              Sort by: Relevant
            </option>

            <option value="low-high">
              Sort by: Low to High
            </option>

            <option value="high-low">
              Sort by: High to Low
            </option>

          </select>

        </div>



        {/* Products Grid */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4

          gap-4
          gap-y-8
        ">

          {filterProducts.map((item, index) => (

            <div
              key={index}
              className="
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <ProductItem
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />

            </div>

          ))}

        </div>



        {/* No Products */}
        {filterProducts.length === 0 && (

          <p className="
            mt-10
            text-center
            text-gray-500
          ">
            No products found.
          </p>

        )}

      </div>

    </div>

  )
}

export default Collection

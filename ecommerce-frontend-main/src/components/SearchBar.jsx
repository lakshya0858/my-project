import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className='text-center border-t border-b bg-gray-50 py-4 shadow-sm'>

      <div className='inline-flex items-center justify-center w-3/4 sm:w-1/2 px-5 py-3 mx-3 my-3 border border-gray-300 rounded-full bg-white shadow-sm focus-within:shadow-md transition-all duration-300'>

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className='flex-1 text-sm outline-none bg-inherit text-gray-700 placeholder-gray-400'
          type="text"
          placeholder='Search'
        />

        <img className='w-4' src={assets.search_icon} alt="" />

      </div>

      <img
        onClick={()=>setShowSearch(false)}
        className='inline w-3 cursor-pointer hover:rotate-90 transition-all duration-300'
        src={assets.cross_icon}
        alt=""
      />

    </div>
  ) : null
}

export default SearchBar
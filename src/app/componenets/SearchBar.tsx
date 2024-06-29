"use client"
import Image from 'next/image'
import searchImage from '../../../public/search.png'
export const SearchBar = () => {
  return (
    <form className='flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'>
        <input placeholder="Search" className='flex-1 bg-transparent outline-none'/>
        <button className="sursor-pointer">
            <Image src={searchImage} alt='searchImage' width={16} height={16} className=''/>
        </button>
    </form>
  )
}

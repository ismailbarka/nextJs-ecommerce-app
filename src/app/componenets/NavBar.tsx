import Link from 'next/link'
import React from 'react'
import { Menu } from './menu'
import Image from 'next/image'
import logoImage from '../../../public/logo.png'
import { SearchBar } from './SearchBar'
import { NavIcons } from './NavIcons'

export const NavBar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* {mobile} */}
        <div className='h-full flex items-center justify-between md:hidden'>
                <Link  href="/">
                    <div className='text-2xl tracking-wide'>LAMA</div>
                </Link>
            <Menu/>
        </div>
        {/* BIGGER SCREENS */}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
            {/* LEFT */}
            <div className='w-1/3'>
                <Link href="/" className='flex items-center gap-3'>
                    <Image src={logoImage} width={24} height={24} alt='logo image'></Image>
                    <div className='text-2xl tracking-wide'>LAMA</div>
                </Link>
            </div>
            {/* RIGHT */}
            <div className='w-2/3 flex items-center justify-between gap-8'>
                <SearchBar/>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

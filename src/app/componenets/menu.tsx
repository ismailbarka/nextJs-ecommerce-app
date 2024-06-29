"use client"


import Image from 'next/image';
import { useState } from 'react';
import React from 'react'
import menuImage from '../../../public/menu.png'
import Link from 'next/link';

export const Menu = () => {

    const [open, setOpen] = useState(false);


  return (
    <div className=''>
        <Image src={menuImage}  alt='menu image' width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
        {open && 
            <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart</Link>
                <Link href="/">Logout(1)</Link>
            </div>
        }
    </div>
  )
}

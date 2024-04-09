import React from 'react'
import Menuitem from './Menuitem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 mx-auto max-w-6xl'>
      <div className='flex gap-4'>
        <Menuitem  title='home' address='/' Icon={AiFillHome}/>
        <Menuitem  title='about' address='/about' Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex gap-4 items-center'>
        <DarkModeSwitch />
      <Link href = "/" className='flex items-center gap-2' >
      <span className='text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2'>Imdb</span>
      <span className='text-xl hidden  sm:inline'>Clone</span>
      </Link>
      </div>

    </div>
  )
}

'use client';

import {MdLightMode,MdDarkMode} from  'react-icons/md';
import {useTheme} from 'next-themes';
import { useState,useEffect } from 'react';

export default function DarkModeSwitch() {
    const {theme,setTheme,systemTheme}=useTheme();

    const[mounted,setMounted]=useState(false);
    
    const currentTheme = theme ==='system' ? systemTheme:theme;
  return (
    <div>
       {  (currentTheme ==='dark'?(<MdLightMode onClick={()=>setTheme('light') } className='text-2xl cursor-pointer hover:text-amber-600' ></MdLightMode>):(<MdDarkMode onClick={()=>setTheme('dark')} className='text-2xl cursor-pointer hover:text-amber-600' ></MdDarkMode>)) }
      
    </div>
  )
}

'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'
export default function NavbarItem({title,param}) {
  <Suspense>
    const searchParams=useSearchParams();
    </Suspense>
    const genre=searchParams.get('genre')
  return (
   

    <div>

     <Link href = {`/?genre=${param}`} className={`hover:text-amber-600 font-semibold ${genre ===param?'underline underline-offset-8 decoration-4 rounded-lg decoration-amber-200':""}`}>
        {title}
        </Link>
    </div>
  )
}

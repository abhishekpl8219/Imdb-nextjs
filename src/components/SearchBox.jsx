'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);
    }
    return (
        <form onSubmit={handleOnSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
            <input type="text" placeholder="search here " value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounde-lg placeholder-gray-500 outline-none bg-transparent flex-1 h-14" />
            <button className="text-amber-700 disabled:text-gray-400 " disabled={search === ''}>
                Search
            </button>
        </form>
    )
}

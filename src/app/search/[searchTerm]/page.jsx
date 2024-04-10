import Results from '@/components/Results';
import React from 'react'

export default async function page({params}) {
    const searchterm=params.searchTerm
    const res= await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchterm}&language=en-US&page=1&include_adult=false`
      );
      const data= await res.json();
      const results=data.results;
  return (
    <div>
     {results && results.length ===
     <h1>No results found</h1>}
     {results && <Results results={results}/>}
    </div>
  )
}

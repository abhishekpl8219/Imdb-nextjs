import Image from 'next/image';

export default async function page({params}) {
    const movieId=params.id;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
      );
    const movie = await res.json();
 
  return (
    <div className='w-full'>
      <div className='flex flex-col p-4 md:pt-8 md:flex-row content-center mx-auto md:space-x-5'>
      <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>
        <div className='p-2'>
            <h2 className='font-bold mb-3 text-lg'>{movie.title || movie.name}</h2>
            <p className='text-lg mb-3'>{movie.overview}</p>
            <p className='mb-3'>
            <span className='font-semibold mr-1'>Data Released:</span>
                {movie.release_date || movie.first_air_date}
            </p>
            <p className='mb-3'>
                <span className='font-semibold mr-1'>Rating:</span>
                {movie.vote_count}
            </p>
        </div>
        </div>
    </div>
  )
}

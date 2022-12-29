import React, { useEffect, useState } from 'react'
import './Row.css';
import { getMovies } from '../../api';

const Row =({title, path,isLarge}) => {


  const imageHost='https://image.tmdb.org/t/p/original';
  const[movies,setMovies] = useState([]);

  const fetchMovies = async(path)=>{
    try{
      const data = await getMovies(path);
      setMovies(data?.results);
    } catch(error){
      console.log("fetchMovies error:" + error);
    }
  }

  useEffect(() => {
    fetchMovies(path);
  }, [path])
  

  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {movies?.map(movie =>{
          return(
            <img className={`movie-card ${isLarge && 'movie-card-large' }`} 
            key={movie.id} 
            src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path }`} 
            alt={movie.name}></img>
          )
        })}
      </div>
    </div>
  )
}

export default Row
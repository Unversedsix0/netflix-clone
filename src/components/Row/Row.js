import React, { useEffect, useState } from 'react'
import './Row.css';
import { getMovies } from '../../api';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

export const Row =({title, path,isLarge}) => {


  const imageHost='https://image.tmdb.org/t/p/original';
  const[trailerUrl,setTrailerUrl] = useState('');
  const[movies,setMovies] = useState([]);


  const handleOnClick = (movie) =>{

    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(   movie?.title || movie?.name || movie?.original_name || "")
      .then((url =>{
        setTrailerUrl(url);
      }))
      .catch((error)=>{
        console.log("Error fetching movie trailer",error);
      })
    }

  }

  const fetchMovies = async(path)=>{
    try{
      const data = await getMovies(path);
      setMovies(data?.results);
      console.log(data)
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
          
           <img 
            className={`movie-card ${isLarge && 'movie-card-large' }`} 
            onClick={()=>{handleOnClick(movie)}}
            key={movie.id} 
            src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path }`} 
            alt={movie.name}
            ></img>
       
           
        );
        })}
      </div>
      {trailerUrl && <ReactPlayer playing={true} url={trailerUrl}/>}
    </div>
 
   
  )
  
}


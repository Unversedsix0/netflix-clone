const API_KEY ='ef93c6a97ea98d8582a914a5a1d3acf9';

const categories = [
    {
        name:'trending',
        title:'Em Alta',
        path: `trending/all/week?api_key=${API_KEY}`,
    },
    {
        name:'netflixOriginals',
        title:'Originais Netflix',
        path: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name:'topRate',
        title:'Populares',
        path: `movie/top_rated?api_key=${API_KEY}`,
    },
    {
        name:'comedy',
        title:'Comedia',
        path: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name:'romances',
        title:'Romances',
        path: `discover/tv?api_key=${API_KEY}&with_genres=1074`,
    },

    {
        name:'documentaries',
        title:'Documentarios',
        path: `discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
]

export const getMovies = async(path) =>{
    try{
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log("error getMovie: ",error);
    }
}

export default categories

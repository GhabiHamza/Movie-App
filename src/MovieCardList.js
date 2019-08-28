import React from 'react';
import MovieCard from './MovieCard';
import Logo6 from './image-plus.png';





const MovieCardList = ({movies=[],onAddMovie=()=>{}})=>{
    return(
    
        <div className='card-list'>
            <div className="row">
        
        {movies.map(el=><MovieCard key={el.id} Y={el}/>)}
        </div>
        
        

        <div >
        
        <img src={Logo6} className='prompt-button' onClick={() => {
                onAddMovie({
                    id:Math.random,
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: '))
                    
                })
            }} type="button" alt="image-prompt"/>
      </div>
      </div>)
        
    
}

export default MovieCardList;


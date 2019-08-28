import React from 'react';




const MovieName =({value,onChange=()=>{}})=> {
        return ( 
            <div>
                <div className="header">
                    
                    <input 
                       type="text"   
                       onChange={(event)=>onChange(event.target.value)}
                       id="header-text" 
                       value={value}/>
                    <button type="button" id="header-search" value="search">search</button>
                        

                </div>
            </div>
                
                
        
         )
    }

 
export default MovieName;
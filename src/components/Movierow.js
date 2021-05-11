import React from 'react';
import  './Movierow.css';
export default ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left">
            <i class="fas fa-arrow-left"></i>
            </div>

            <div className="movieRow--right">
            <i class="fas fa-arrow-right"></i>
            </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list">
                  {items.results.length > 0 && items.results.map((item, key)=>(
                      <div key={key} className="movieRow--item">
                         <img src ={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} /> 
                    </div>
                  ))}

                </div>
             </div>
        </div>
    );
}
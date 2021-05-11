import React, { useEffect, useState  } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Movierow from './components/Movierow';
import Header from './components/Header/index';

export default ()  => {

  const [movielist, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <Header/>


      <section className="lists format">
        {movielist.map((item, key)=>(
        <Movierow key = {key} title = {item.title} items={item.items}/>
      
        ))}
      </section>

      <footer>
        <span>
        © 2021 Suno Movies. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
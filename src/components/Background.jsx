import React from 'react'
import Rbuttons from '../components/Rbuttons'
import Cbuttons from '../components/Cbuttons'

import '../Styles/Background.css'



  function Background({ searchQuery, onSearchChange }) {
  return (
    <div className=''>
 <div className='main' >
  <img className='back' src={"img/background.jpg"} alt="Snow"/>
  <div class="bottom-left">Read more about the Content License</div>
  <div class="bottom-right">Free image by Nennieinszweidrei</div>
  <div class="centered">
    <h2 className='head'>Stunning royalty-free images & royalty-free stock</h2>
    <p>Over 4.3 million+ high quality stock images, videos and music shared by our talented community.</p>
   
            
            <input
        type="search"
        placeholder="Search Pixabay"
        value={searchQuery}
        onChange={onSearchChange}
        className="search-input"
        id="search"
      />
            <select name="videos" className="videos-select">
            <option style={{background:"white"}} value="">All images</option>
            <option style={{background:"white"}} value="">Photos</option>
            <option style={{background:"white"}} value="">Videos</option>
            <option style={{background:"white"}} value="">Music</option>
            <option style={{background:"white"}} value="">Sound Effects</option>
            <option style={{background:"white"}} value="">Gits</option>
          </select>
           
          
  </div>
</div>
<div>
<Rbuttons/>
</div>
<div style={{marginBottom:"30px"}}>
<Cbuttons/>
</div>
    </div>
  )
}

export default Background
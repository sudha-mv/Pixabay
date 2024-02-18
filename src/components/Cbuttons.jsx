import React from 'react'
import '../Styles/Cbuttons.css'

const Cbuttons = () => {
  return (
    <div className='Cbuttons'>
        <button className='botn btn-xs'>nature</button>
        <button className='botn'>wallpaper</button>
        <button className='botn'>background</button>
        <button className='botn'>sky</button>
        <button className='botn'>love</button>
        <button className='botn'>flowers</button>
        <button className='botn'>food</button>
        <button className='botn'>beach</button>
        <button className='botn'>flower</button>
        <button className='botn'>forest</button>
        <button className='botn'>cat</button>
        <button className='botn'>water</button>
        <button className='botn2'>iphone wallpaper</button>
        <button className='botn1' > 
             <select name="videos" id="videosSelect">
            <option className='option'  value="">All images</option>
            <option className='option' value="">Photos</option>
            <option className='option' value="">Videos</option>
            <option className='option' value="">Music</option>
            <option className='option' value="">Sound Effects</option>
            <option className='option' value="">Gits</option>
          </select>
        </button>

    </div>
  )
}

export default Cbuttons
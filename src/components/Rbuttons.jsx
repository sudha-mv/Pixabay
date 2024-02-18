import React from 'react'
import '../Styles/Rbuttons.css'

const Rbuttons = () => {
  return (
    <div className='Rbuttons'>
      <button className='button'><img className='hello' src={"img/home.jpg"} alt="" />Home</button>
      <button  className='button'><img className='hello' src={"img/photo.jpg"} alt="" />Photos</button>
      <button  className='button'><img className='hello' src={"img/illustration.jpg"} alt="" />Illustration</button>
      <button  className='button'><img className='hello' src={"img/vectors.jpg"} alt="" />Vectors</button>
      <button  className='button'><img className='hello' src={"img/vedio.jpg"} alt="" />Videos</button>
      <button  className='button'><img className='hello' src={"img/music.jpg"} alt="" />Music</button>
      <button  className='button'><img className='hello' src={"img/sound.jpg"} alt="" />Sound Effect</button>
      <button  className='button'><img className='hello' src={"img/gifs.jpg"} alt="" />Gifs</button>
    </div>
  )
}

export default Rbuttons
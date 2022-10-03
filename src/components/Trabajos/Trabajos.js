import React from 'react'
import './Trabajos.css'

const Trabajos = () => {
  return (
    <section className='trabajos-section'>  
        <h2 className='trabajos-titulo'>Trabajos realizados con estos equipos</h2>
        <div className="videos-container">
            <div className="video-container">
                <h4 className='video-titulo'>Video 1</h4>
                <iframe src="https://www.youtube.com/embed/zmJq-HRJr-g" title="Panther - Fanático (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
              </div>
              
            <div className="video-container">
                <h4 className='video-titulo'>Video 1</h4>
                <iframe src="https://www.youtube.com/embed/zmJq-HRJr-g" title="Panther - Fanático (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
            </div>
        </div>
    </section>
  )
}

export default Trabajos

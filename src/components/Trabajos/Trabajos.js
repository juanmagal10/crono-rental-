import React from 'react'
import './Trabajos.css'

const Trabajos = () => {
  return (
    <section className='trabajos-section'>  
        <h2 className='trabajos-titulo'>Trabajos realizados con estos equipos:</h2>
      <div className="videos-container">
          <div className="video-container">
          <h4 className='video-titulo'>Video institucional ELCOR-TONADIT</h4>
          <h5 className='video-director'>Dirigido por: Tomas Bringa</h5>
                <iframe src="https://www.youtube.com/embed/vHgF-tiiBNA" title="Video institucional ELCOR-TONADITA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='video'></iframe>
          </div>
        
            <div className="video-container">
          <h4 className='video-titulo'>Videoclip Tai Chi Chuan - SAINT feat NAUEL & KACO</h4>
          <h5 className='video-director'>Dirigido por: Lihuen Peirone</h5>
                <iframe src="https://www.youtube.com/embed/IRXCcUqqJ9A" title="Tai Chi Chuan - SAINT feat NAUEL + KACO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='video'></iframe>
        </div>
        
            <div className="video-container">
              <h4 className='video-titulo'>Videoclip Fanático - Panther</h4>
              <h5 className='video-director'>Dirigido por: Genaro Donatti</h5>
              <iframe src="https://www.youtube.com/embed/zmJq-HRJr-g" title="Panther - Fanático (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='video'></iframe>
            </div>
        
            <div className="video-container">
              <h4 className='video-titulo'>Videoclip Parte de mi - Clayson Ha ft. Billy Bel</h4>
              <h5 className='video-director'>Dirigido por: Tomas Bringa</h5>
              <iframe src="https://www.youtube.com/embed/bsy2SDdJcac" title="Clayson Ha - Parte De Mi feat. Billy Bel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='video'></iframe>
          </div>
        </div>
    </section>
  )
}

export default Trabajos

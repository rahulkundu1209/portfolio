import React from 'react';

import './PhotoPolaroids.css';
import P1 from '../../assets/Photographs/p_1.jpg';
import P2 from '../../assets/Photographs/p_2.jpg';
import P3 from '../../assets/Photographs/p_3.jpg';
import P4 from '../../assets/Photographs/p_4.jpg';
import P5 from '../../assets/Photographs/p_5.jpg';

const PhotoPolaroids = () => {
  return (
    <div className='photo-polaroids'>
      <div className='pictures-pile'>
        <figure>
          <img className='photo-polaroids-img' src={P1} alt='P1' height="400px" width="300px" />
          <figcaption>#love</figcaption>
        </figure>
        <figure>
          <img className='photo-polaroids-img' src={P2} alt='P2' height="400px" width="300px" />
          <figcaption>#nature</figcaption>
        </figure>
        <figure>
          <img className='photo-polaroids-img' src={P3} alt='P3' height="400px" width="300px" />
          <figcaption>#travel</figcaption>
        </figure>
        <figure>
          <img className='photo-polaroids-img' src={P4} alt='P4' height="400px" width="300px" />
          <figcaption>#sunset</figcaption>
        </figure>
        <figure>
          <img className='photo-polaroids-img' src={P5} alt='P5' height="400px" width="300px" />
          <figcaption>#aesthetics</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default PhotoPolaroids

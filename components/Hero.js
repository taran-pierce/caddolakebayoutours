import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './hero.scss'

const Hero = ( props ) => {
  const { imagePath, alt } = props

  return (
    <section className={`hero`}>
      <CloudinaryContext cloudName={`tpierce36`}>
        <div className={`img-wrapper`}>
          <Image 
            publicId={imagePath}
            responsive
            width={`auto`}
            crop={`scale`}
            alt={alt}
          >
            <Transformation 
              quality={`90`} 
              fetchFormat={`auto`} 
              gravity={`auto`} 
            />
          </Image>
        </div>
      </CloudinaryContext>
    </section>
  )
}

Hero.propTypes = {
  imagePath: PropTypes.string,
}

export default Hero
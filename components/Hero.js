import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './hero.scss'

const Hero = ( props ) => {
  const { imagePath } = props

  return (
    <section className={`hero`}>
      <CloudinaryContext cloudName="tpierce36">
        <div className={`img-wrapper`}>
          <Image 
            publicId={imagePath}
            responsive
            width="auto"
            crop="scale"
          >
            <Transformation quality="70" fetchFormat="auto" />
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
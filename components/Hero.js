import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './hero.scss'

const Hero = ( props ) => {
  return (
    <section className={`hero`}>
      <div>
        <CloudinaryContext cloudName="tpierce36">
            <Image 
              publicId={props.imagePath}
              responsive
              width="auto"
              crop="scale"
            >
              <Transformation quality="70" fetchFormat="auto" />
            </Image>
        </CloudinaryContext>
      </div>
    </section>
  )
}

Hero.propTypes = {
  imagePath: PropTypes.string,
}

export default Hero
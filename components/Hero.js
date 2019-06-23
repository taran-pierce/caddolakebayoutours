import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

const Hero = ( props ) => {
  const heroStyles = {
    overflow: 'hidden',
    borderBottom: '5px solid #afa62f',
  }

  return (
    <section className="hero">
      <div style={heroStyles}>
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
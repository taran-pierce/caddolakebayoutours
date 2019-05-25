import PropTypes from 'prop-types'

const Hero = ( props ) => {
  const heroStyles = {
    overflow: 'hidden',
    height: props.imageHeight,
    borderBottom: '5px solid #afa62f',
  }

  return (
    <section>
      <style jsx>{`
        img {
          display: block;
          max-width: 100%;
          position: relative;
          bottom: ${props.imageBottomAdjustment};
        }
      `}</style>
      <div style={heroStyles}>
        <img src={props.imagePath} alt={props.altText} />
      </div>
    </section>
  )
}

Hero.propTypes = {
  imagePath: PropTypes.string,
  altText: PropTypes.string,
  imageBottomAdjustment: PropTypes.string,
  imageHeight: PropTypes.string,
}

export default Hero
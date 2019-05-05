import PropTypes from 'prop-types'

const heroStyles = {
  overflow: 'hidden',
  // TODO should be a prop
  height: '300px',
}

const Hero = ( props ) => {
  return (
    <section style={heroStyles}>
      <style jsx>{`
        img {
          max-width: 100%;
        }
      `}</style>
      <img src={props.imagePath} alt={props.altText} />
    </section>
  )
}

Hero.propTypes = {
  imagePath: PropTypes.string,
  altText: PropTypes.string,
}

export default Hero
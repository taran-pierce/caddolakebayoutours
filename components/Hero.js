import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './hero.scss'

const Hero = ( props ) => {
  const {
    imagePath,
    alt,
    bottom,
    minHeight,
  } = props

  return (
    <section className={`hero`}>
      <CloudinaryContext cloudName={`tpierce36`}>
        {/* TODO bottom should not be required to get styles */}
        {bottom ? (
          <style jsx={`true`}>{`
            .hero {
              height: ${minHeight && minHeight.mobile ? minHeight.mobile : 'auto'};
            }

            .hero .img-wrapper {
              min-height: 203px;
            }

            @media (min-width: 768px) {
              .hero {
                height: ${minHeight && minHeight.tablet ? minHeight.tablet : 'auto'};
              }
            }

            @media (min-width: 992px) {
              .hero {
                height: ${minHeight && minHeight.desktop ? minHeight.desktop : 'auto'};
              }

              .hero .img-wrapper img {
                position: relative;
                bottom: ${bottom}px;
              }
            }
          `}</style>
        ) : null }
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
  alt: PropTypes.string,
  bottom: PropTypes.number,
}

export default Hero
import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './imageGallery.scss'

const galleryName = 'gallery/caddo-lake-'

class ImageGallery extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      currentSlide: 1,
      lastSlide: 13,
      lightBoxOpen: false,
    }

    this.previousImage = this.previousImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.toggleLightBox = this.toggleLightBox.bind(this)
  }

  nextImage( event ) {
    event.preventDefault()

    let nextSlide = this.state.currentSlide + 1

    if ( this.state.currentSlide != this.state.lastSlide ) {
      this.setState({ currentSlide: nextSlide })
    }
  }

  previousImage( event ) {
    event.preventDefault()

    let previousSlide = this.state.currentSlide - 1

    if ( this.state.currentSlide != 1 ) {
      this.setState({ currentSlide: previousSlide })
    }
  }

  toggleLightBox( event ) {
    event.preventDefault()

    this.setState({ lightBoxOpen: !this.state.lightBoxOpen })
  }

  render() {
    const { currentSlide, lightBoxOpen } = this.state

    return (
      <section className={`image-gallery`}>
        <h2>Pictures of Caddo Lake</h2>
        <div className={`gallery-container`}>
          <nav>
            <ul>
              <li>
                <a
                  className={`btn ${currentSlide == 1 && 'disabled'}`}
                  onClick={this.previousImage}
                >Previous</a>
              </li>
              <li>
                <a
                  className={`btn ${currentSlide == 11 && 'disabled'}`}
                  onClick={this.nextImage}
                >Next</a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <CloudinaryContext cloudName="tpierce36">
                <a
                  href={`https://res.cloudinary.com/tpierce36/image/upload/v1578238226/${galleryName}${currentSlide}.jpg`}
                >
                  <Image
                    publicId={`${galleryName}${currentSlide}.jpg`}
                    responsive
                    width="auto"
                    crop="scale"
                    alt={`Caddo Lake #${currentSlide}`}
                  >
                    <Transformation quality="auto" fetchFormat="auto" />
                  </Image>
                </a>
              </CloudinaryContext>
            </li>
          </ul>
          <nav>
            <ul>
              <li>
                <a className={`btn ${currentSlide == 1 && 'disabled'}`} onClick={this.previousImage}>Previous</a>
              </li>
              <li>
                <a className={`btn ${currentSlide == 11 && 'disabled'}`} onClick={this.nextImage}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

ImageGallery.propTypes = {
  currentSlide: PropTypes.number,
  previousImage: PropTypes.func,
  nextImage: PropTypes.func,
}

export default ImageGallery
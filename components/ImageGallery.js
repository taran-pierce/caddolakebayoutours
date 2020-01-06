import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './imageGallery.scss'

const galleryName = 'gallery/caddo-lake-'

class ImageGallery extends React.Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      currentSlide: 1,
      lastSlide: 11
    }

    this.previousImage = this.previousImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
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
  
  render() {
    const { previousImage, nextImage } = this.props
    const { currentSlide } = this.state

    return (
      <section className={`image-gallery`}>
        <h2>Pictures of Caddo Lake</h2>
        <div className={`gallery-container`}>
          <ul>
            <li>
              <CloudinaryContext cloudName="tpierce36">
                <Image 
                  publicId={`${galleryName}${currentSlide}.jpg`}
                  responsive
                  width="auto"
                  crop="scale"
                  alt={`Caddo Lake #${currentSlide}`}
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
              </CloudinaryContext>
            </li>
          </ul>
          <nav>
            <ul>
              <li>
                <a className={`btn ${currentSlide == 1 && 'disabled'}`} onClick={previousImage}>Previous</a>
              </li>
              <li>
                <a className={`btn ${currentSlide == 11 && 'disabled'}`} onClick={nextImage}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

ImageGallery.PropTypes = {
  currentSlide: PropTypes.number,
  previousImage: PropTypes.func,
  nextImage: PropTypes.func,
}

export default ImageGallery
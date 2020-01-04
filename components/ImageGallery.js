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
    return (
      <section className={`image-gallery`}>
        <h2>Pictures of Caddo Lake</h2>
        <div className={`gallery-container`}>
          <ul>
            <li>
              <CloudinaryContext cloudName="tpierce36">
                <Image 
                  publicId={`${galleryName}${this.state.currentSlide}.jpg`}
                  responsive
                  width="auto"
                  crop="scale"
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
              </CloudinaryContext>
            </li>
          </ul>
          <nav>
            <ul>
              <li>
                <a className={`btn ${this.state.currentSlide == 1 && 'disabled'}`} onClick={this.previousImage}>Previous</a>
              </li>
              <li>
                <a className={`btn ${this.state.currentSlide == 11 && 'disabled'}`} onClick={this.nextImage}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default ImageGallery
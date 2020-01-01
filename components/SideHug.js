import PropTypes from 'prop-types'
import TextBlock from './TextBlock'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './sideHug.scss'

const SideHug = ( props ) => {
  const { imageFirst, textData, image } = props.data 

  return (
    <section className={`side-hug`}>
      <div className={`container flex`}>
        <div className={`col`}>
          {imageFirst ? 
            (
              <CloudinaryContext cloudName="tpierce36">
                <div className={`img-wrapper`}>
                  <Image 
                    publicId={props.data.image.path}
                    responsive
                    width="auto"
                    crop="scale"
                  >
                    <Transformation quality="auto" fetchFormat="auto" />
                  </Image>
                </div>
              </CloudinaryContext>
            ) : (
              textData.map( (text, index) => (
                <TextBlock key={index} data={text} />
              ))
            )
          }
        </div>
        <div className={`col`}>
          {imageFirst ?
            (
              textData.map( (text, index) => (
                <TextBlock key={index} data={text} />
              ))
            ) : (
              <CloudinaryContext cloudName="tpierce36">
                <div className={`img-wrapper`}>
                  <Image 
                    publicId={props.data.image.path}
                    responsive
                    width="auto"
                    crop="scale"
                  >
                    <Transformation quality="auto" fetchFormat="auto" />
                  </Image>
                </div>
              </CloudinaryContext>
            )
          }
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: PropTypes.object,
}

export default SideHug
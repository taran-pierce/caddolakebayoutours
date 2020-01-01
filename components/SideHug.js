import PropTypes from 'prop-types'
import TextBlock from './TextBlock'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

import './sideHug.scss'

const SideHug = ( props ) => {
  return (
    <section className={`side-hug`}>
      <div className={`flex ${props.data.imageSide === 'left' ? 'image-left' : ''}`}>
        <div className={`item ${props.data.imageSide === 'left' ? 'text-right' : 'text-left'}`}>
          {props.data.textData.map( ( text, index ) => (
            <TextBlock key={index} data={text} />
          ))}
        </div>
        <div className={'item image'}>
          {props.data.googleMap && <div dangerouslySetInnerHTML={{__html: props.data.googleMap}} /> }
          {props.data.image && (
            <CloudinaryContext cloudName="tpierce36">
              <Image 
                publicId={props.data.image.path}
                responsive
                width="auto"
                crop="scale"
              >
                <Transformation quality="auto" fetchFormat="auto" />
              </Image>
            </CloudinaryContext>
          )}
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: PropTypes.object,
}

export default SideHug
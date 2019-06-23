import PropTypes from 'prop-types'
import TextBlock from './TextBlock'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

const SideHug = ( props ) => {
  return (
    <section className="side-hug">
      <style jsx>{`
        @media( min-width: 992px ) {
          .flex {
            display: flex;
            align-items: center;
          }
  
          .item {
            flex-grow: 1;
            width: 50%;
          }
  
          .image-left .item:last-child {
            order: 0;
          }
          .image-left .item:first-child {
            order: 1;
          }
          .item.image {
            padding: 0;
          }

          .text-left {
            padding-right: 1rem;
          }

          .text-right {
            padding-left: 1rem;
          }

        }
      `}</style>
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
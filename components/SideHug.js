import PropTypes from 'prop-types'
import TextBlock from './TextBlock'

const imageLeftStyles = {
  padding: '0 1rem 0 0',
  background: '#fafafa',
  border: '1px solid rgba(0,0,0,.1)',
  borderTop: '5px solid #afa62f',
  borderBottom: '5px solid #afa62f',
}

const imageRightStyles = {
  padding: '0 0 0 1rem',
  background: '#fafafa',
  border: '1px solid rgba(0,0,0,.1)',
  borderTop: '5px solid #afa62f',
  borderBottom: '5px solid #afa62f',
}

const SideHug = ( props ) => {
  return (
    <section style={props.data.imageSide === 'left' ? imageLeftStyles : imageRightStyles}>
      <style jsx>{`
        img {
          display: block;
          max-width: 100%;
        }

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
          <img src={props.data.image.path} alt={props.data.image.alt} />
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: PropTypes.object,
}

export default SideHug
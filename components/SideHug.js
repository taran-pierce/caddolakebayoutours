import PropTypes from 'prop-types'

const sideHugStyles = {
  padding: '0 1rem',
}

const imageLeftStyles = {
  order: '1',
}

const SideHug = ( props ) => {
  return (
    <section>
      <style jsx>{`
        img {
          max-width: 100%;
        }

        @media( min-width: 992px ) {
          .flex {
            display: flex;
          }
  
          .item {
            padding: 0 1rem;
            grow: 1;
            width: 50%;
          }
  
          .image-left .item:last-child {
            order: 0;
          }
          .image-left .item:first-child {
            order: 1;
          }
        }
      `}</style>
      <div className={`flex ${props.data.imageSide === 'left' ? 'image-left' : ''}`}>
        <div className={'item'}>
          {props.data.titles.map( ( title ) => (
            <div dangerouslySetInnerHTML={{__html: title}} />
          ))}
          {props.data.paragraphs.map( ( paragraph ) => (
            <p key={paragraph} dangerouslySetInnerHTML={{__html: paragraph}} />
          ))}
        </div>
        <div className={'item'}>
          <img src={props.data.imagePath} />
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: PropTypes.object,
}

export default SideHug
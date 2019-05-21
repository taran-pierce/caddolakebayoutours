import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const Icon = ( props ) => {
  return (
    <span onClick={props.toggleMenu}>
      <style jsx>{`
        span {
          cursor: pointer;
          margin-left: .5rem;
          margin-right: .5rem;
        }
      `}</style>
      <FontAwesome
        name={props.name}
        style={{ 
          textShadow: props.menuOpen ? '-1px -1px 0 rgba(255,255,255,.1)' : '0 1px 0 rgba(0, 0, 0, 0.5)',
          color: props.menuOpen ? '#595418' : '#e8e3d8',
          transition: 'all .5s ease-in-out',
        }}
        tag='i'
      />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.any.isRequired,
  clickEvent: PropTypes.func,
  active: PropTypes.any,
}

export default Icon
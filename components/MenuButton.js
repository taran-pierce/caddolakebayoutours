import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const iconStyle = {
  float: 'right',
}

const Icon = ( props ) => {
  return (
    <span onClick={props.clickEvent} style={iconStyle}>
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
          textShadow: props.active ? '0 1px 0 rgba(0, 0, 0, 0.5)' : '0 1px 0 rgba(0, 0, 0, 0.1)',
          color: props.active ? '#dfd2c8' : '#666',
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
import PropTypes from 'prop-types'

import './menuButton.scss'

const Icon = ( props ) => {
  return (
    <div className={`menu-button`} onClick={props.toggleMenu}>
        {props.menuOpen ? 
          (
            <a href={`#`}>
              <span className={`menu-open`}></span>
              <span className={`menu-open`}></span>
              <span className={`menu-open`}></span>
            </a>
          ) : 
          (
            <a href={`#`}>
              <span className={`menu-closed`}></span>
              <span className={`menu-closed`}></span>
              <span className={`menu-closed`}></span>
            </a>
          )
        }
    </div>
  )
}

Icon.propTypes = {
  clickEvent: PropTypes.func,
  active: PropTypes.any,
}

export default Icon
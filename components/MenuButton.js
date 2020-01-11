import PropTypes from 'prop-types'

import './menuButton.scss'

const Icon = ( props ) => {
  const { menuOpen, toggleMenu } = props

  return (
    <div className={`menu-button`} onClick={toggleMenu}>
        {menuOpen ? 
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
  toggleMenu: PropTypes.func,
  menuOpen: PropTypes.bool,
}

export default Icon
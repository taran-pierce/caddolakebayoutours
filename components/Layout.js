import './layout.scss'

const Layout = ( props ) => {
  const { children } = props

    return (
      <div className={`container`}>
        {children}
      </div>
    )
}

export default Layout
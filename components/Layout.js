import Header from './Header'
import Hero from './Hero'

const layoutStyle = {
  margin: '0 auto',
  padding: '0 15px',
  // TODO make width a var on viewport
  width: '970px',
}

const Layout = ( props ) => {
    return (
      <div style={layoutStyle}>
        <Header />
        <Hero />
      </div>
    )
}

export default Layout
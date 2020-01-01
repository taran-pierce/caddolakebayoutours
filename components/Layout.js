import Header from './Header'
import Footer from './Footer'

import './layout.scss'

const Layout = ( props ) => {
    return (
      <div>
        <Header pageTitle={props.pageTitle} canonical={props.canonical} />
        {props.children}
        <Footer />
      </div>
    )
}

export default Layout
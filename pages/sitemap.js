import React from 'react'

class Page extends React.Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      activeTab: 'sitemap',
    }
  }
  
  render() {
    return (
      <section>
        <div className={`container`}>
          <h1>Sitemap</h1>
        </div>
      </section>
    )
  }
}

Page.getInitialProps = async ({ req }) => {
  const canonical = '/sitemap/'
  const pageTitle = 'Sitemap - Caddo Lake Bayou Tours'
  const activeTab = 'sitemap'
  
  return {
    activeTab,
    canonical,
    pageTitle
  }
}

export default Page
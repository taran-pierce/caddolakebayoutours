import React from 'react'

const links = [
  {
    "name": "About",
    "href": "/about/"
  },
  {
    "name": "Directions",
    "href": "/directions/"
  },
  {
    "name": "Things to do",
    "href": "/things-to-do/"
  },
  {
    "name": "Photo Gallery",
    "href": "/photo-gallery/"
  },
  {
    "name": "Contact",
    "href": "/contact/"
  }
]

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
        <style jsx>{`
          div {
            padding: 1rem;
            background: #fff;
            border-left: 1px solid #cbcbcb;
            border-right: 1px solid #cbcbcb;
          }
        `}</style>
        <div>
          <h1>Sitemap</h1>
          <ul>
            {links.map( (link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
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
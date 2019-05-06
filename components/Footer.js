import PropTypes from 'prop-types'

const footerStyles = {
  //overflow: 'hidden',
  // TODO should be a prop
  //height: '300px',
}

const Footer = ( props ) => {
  return (
    <footer>
      <style jsx>{`
        .flex {
          display: flex;
        }

        .item {
          width: 20%;
        }
        .item:nth-child(2) {
          width: 60%;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }
      `}</style>
      <div className={'flex'}>
        <div className={'item'}>
          <h4>Sitemap</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Book a Tour</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/directions">Directions</a></li>
            <li><a href="/things-to-do-in-caddo-lake">Things to do</a></li>
            <li><a href="/photo-gallery">Photo Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul>
            <li>Like us on FaceBook!</li>
            <li>
              <div data-href="https://www.facebook.com/caddotours/" data-width="260px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </li>
          </ul>
        </div>
        <div className={'item'}>
          <div className={'map-container'}>
            <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={'address-block'}>
            <p>Rich McFarland, Tour Guide</p>
            <p><strong>Address:</strong> 449 Cypress Drive, Uncertain TX 75661</p>
            <p><strong>Phone: </strong>903-570-2169</p>
          </div>
        </div>
        <div className={'item'}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="http://shadygladeresort.com/" target="_blank" rel="noopener">Shady Glade Resort</a></li>
            <li><a href="http://johnsonsranch.net/" target="_blank" rel="noopener">Johnson's Ranch Marina</a></li>
            <li><a href="http://www.moonglowlodge.com/" target="_blank" rel="noopener">Moonglow Lodge</a></li>
            <li><a href="http://www.hodgepodgecottages.com/" target="_blank" rel="noopener">HodgePodge Cottages</a></li>
            <li><a href="http://thegraytripper.com/" target="_blank" rel="noopener">The Graytripper</a></li>
            <li><a href="http://tpwd.texas.gov/state-parks/caddo-lake" target="_blank" rel="noopener">Caddo State Park</a></li>
          </ul>
        </div>
      </div>
      <p className={'copy-right'}>Copyright 2018 &copy;</p>
    </footer>
  )
}

//Footer.propTypes = {
//  data: PropTypes.object,
//}

export default Footer
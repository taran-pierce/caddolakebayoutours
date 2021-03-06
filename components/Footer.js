import PropTypes from 'prop-types'

import './footer.scss'

const year = new Date().getFullYear();

const Footer = ( props ) => {
  const { links } = props

  return (
    <footer>
      <div className={'container flex'}>
        <div className={'item'}>
          <h4>Sitemap</h4>
          <ul>
            <li><a href={`/`}>Home</a></li>
            {links.map( (link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <li>Like us on FaceBook!</li>
            <li>
            <div className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="260px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </li>
          </ul>
        </div>
        <div className={'item map'}>
          <div className={'map-container'}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className={'address-block'}>
            <p>Rich McFarland, Tour Guide</p>
            <p><strong>Address:</strong> 449 Cypress Drive, Uncertain TX 75661</p>
            <p><strong>Phone: </strong><a href={`tel:1-903-570-2169`}>903-570-2169</a></p>
          </div>
        </div>
        <div className={'item'}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="http://shadygladeresort.com/" target="_blank" rel="noopener">Shady Glade Resort</a>
            </li>
            <li>
              <a href="https://carriagehousejefferson.com/" target="_blank" rel="noopener">Carriage House Bed and Breakfast</a>
            </li>
            <li>
              <a href="https://riverbendoutfitters.com/" target="_blank" rel="noopener">Riverbend Outfitters</a>
            </li>
            <li>
              <a href="https://johnsonsranch.net/" target="_blank" rel="noopener">Johnson's Ranch Marina</a>
            </li>
            <li>
              <a href="https://www.travelawaits.com/2552685/outdoor-activities-near-jefferson-texas/" target="_blank" rel="noopener">TravelAwaits</a>
            </li>
            <li>
              <a href="https://www.moonglowlodge.com/" target="_blank" rel="noopener">Moonglow Lodge</a>
            </li>
            <li>
              <a href="https://www.hodgepodgecottages.com/" target="_blank" rel="noopener">HodgePodge Cottages</a>
            </li>
            <li>
              <a href="https://thegraytripper.com/" target="_blank" rel="noopener">The Graytripper</a>
            </li>
            <li>
              <a href="https://tpwd.texas.gov/state-parks/caddo-lake" target="_blank" rel="noopener">Caddo State Park</a>
            </li>
            <li>
              <a href="https://www.mikemoirphotography.com/" target="_blank" rel="noopener">Mike Moir Photography</a>
            </li>
            <li>
              <a href="https://albertmoyerjr.com/" target="_blank" rel="noopener">Albert Moyer, Jr. Photography</a>
            </li>
            <li>
              <a href="https://westerman.photo/index.php/travels/jefferson-texas/" target="_blank" rel="noopener">WesterBlog</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={'copy-right'}>Copyright {year} &copy;</p>
    </footer>
  )
}

Footer.propTypes = {
  links: PropTypes.array,
}

export default Footer
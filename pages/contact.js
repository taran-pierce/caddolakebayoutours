import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Form from '../components/Form'
import 'isomorphic-fetch'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

class Page extends React.Component {
  constructor( props ) {
    super( props )
    
    this.state = {
      firstName: '',
      lastName: '',
      message: '',
      email: '',
      sent: false,
      error: null,
      buttonText: 'Send Message'
    }

    this.onFirstNameChange = this.onFirstNameChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  onLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit() {

    let data = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      message: this.state.message
    }

    event.preventDefault()

    fetch('/send/mail', {
      method: 'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then( ( res ) => {
      res.status === 200 ? this.setState({ sent: true }) : ''
      this.resetForm()
    })
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      buttonText: 'Send',
    })
  }
  
  render() {
    return (
      <div className={`layout`}>
        <div className={'main-container'}>
          <Header 
            pageTitle={'Contact | Caddo Lake Bayou Tours'} 
            canonical={'/contact'} 
            activeTab={'contact'}
          />
          <Hero imagePath={'caddo-lake-swamp.jpg'} />
          <style jsx>{`  
            ul {
              list-style-type: none;
              padding: 0;
              margin: 0 0 1rem 0;
            } 

            @media(min-width: 768px) {
              .flex {
                display: flex;
              }

              .item {
                width: 50%;
              }

              img {
                display: block;
                margin: 0 auto;
              }
            }
          `}</style>
          <section className="side-hug with-padding">
            <h1>Contact</h1>
            <p>If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.</p>
            <p>Come and enjoy the wonderful experience that is Caddo Lake. We can't wait to share it with you!</p>
          </section>
          <section className="side-hug">
            <div className={'flex'}>
              <div className={'item text-left'}>
                <h3>Rich McFarland <strong>Tour Guide</strong></h3>
                <p>Tours available 7 days a week, any time from sunrise to sunset.</p>
                <p>Boat tours last approximately one hour.</p>
                <p>Make sure to like us on <a href="https://www.facebook.com/caddotours/" target="_blank">FaceBook</a></p>
                <h3>Address</h3>
                <ul>
                  <li><strong>449 Cypress Drive</strong></li>
                  <li>Uncertain TX 75661</li>
                  <li><strong>Phone: </strong>903-570-2169</li>
                </ul>
                <h4>Book a boat tour or send a message</h4>
                <p>Ask about boat tour reservations, fishing trips, availability of dates or times, or any other general questions.</p>
                <Form 
                  onFirstNameChange={this.onFirstNameChange}
                  onLastNameChange={this.onLastNameChange}  
                  onMessageChange={this.onMessageChange}
                  onEmailChange={this.onEmailChange}
                  onSubmit={this.onSubmit}
                  state={this.state}
                />
              </div>
              <div className={'item'}>
              <CloudinaryContext cloudName="tpierce36">
                <Image 
                  publicId="lake-sunset-2.jpg"
                  responsive
                  width="auto"
                  crop="scale"
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
              </CloudinaryContext>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Page
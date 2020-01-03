import PropTypes from 'prop-types'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

const Form = ( props ) => {
  const { onSubmit, onFirstNameChange, onLastNameChange, onEmailChange, onMessageChange, data } = props
  const { sent, firstName, lastName, email, message, buttonText } = props.state

  if ( !sent ) {

    const textData = data.textData[0]

    return (
      <section>
        <div className={`container flex`}>
          <div className={`col`}>
            {textData && (
              textData.titles && textData.titles.map( ( title, index ) => (
                <div key={index} dangerouslySetInnerHTML={{__html: title}}></div>
              ))
            )}
            {textData && (
              textData.paragraphs && textData.paragraphs.map( (paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}></p>
              ))
            )}
            {textData && (
              textData.lists && textData.lists.map( (list, index) => (
                <ul key={index}>
                  {list.items.map( (item, index) => (
                    <li key={index}>
                      {item.title && (
                        <h4>{item.title}</h4>
                      )}
                      {item.paragraphs.map((paragraph, index) => (
                        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                      ))}
                    </li>
                  ))}
                </ul>
              ))
            )}
            <form className="contact-form" onSubmit={onSubmit}>
              <fieldset>
                <label htmlFor="first_name">First Name</label>
                <input 
                  onChange={onFirstNameChange} 
                  type="text" 
                  name="first_name" 
                  id="first_name"
                  placeholder="First Name"
                  value={firstName}
                  inputMode={`text`}
                  required />
              </fieldset>
              <fieldset>
                <label htmlFor="last_name">Last Name</label>
                <input 
                  type="text" 
                  name="last_name" 
                  id="last_name"
                  onChange={onLastNameChange}
                  value={lastName}
                  placeholder="Last Name"
                  inputMode={`text`}  
                  required />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  onChange={onEmailChange}
                  placeholder="your@email.com"
                  value={email} 
                  inputMode={`email`}
                  required />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  onChange={onMessageChange}
                  value={message}
                  inputMode={`text`}
                  required>
                </textarea>
              </fieldset>
              <div className="button-wrapper">
                <button type="submit" className="btn">{buttonText}</button>
              </div>
            </form>
          </div>
          <div className={`col`}>
            <CloudinaryContext cloudName="tpierce36">
              <div className={`img-wrapper`}>
                <Image 
                  publicId={data.image.path}
                  responsive
                  width="auto"
                  crop="scale"
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
              </div>
            </CloudinaryContext>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <div>
        <h4>Message Received!</h4>
        <p>Thanks for you interest! I will contact you as soon as possible.</p>
      </div>
    )
  }
}

Form.propTypes = {
  onFirstNameChange: PropTypes.func,
  onLastNameChange: PropTypes.func,
  onMessageChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onSubmit: PropTypes.func,
  state: PropTypes.any,
}

export default Form
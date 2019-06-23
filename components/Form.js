import PropTypes from 'prop-types'

const Form = ( props ) => {
  if ( !props.state.sent ) {
    return (
      <div>
        <style jsx>{`
          fieldset {
            border: none;
            padding: 0;
            margin: 0;
          }
  
          input, textarea {
            border: 1px solid #cacaca;
            border-radius: 5px;
            padding: .5rem;
            margin-top: .2rem;
            margin-bottom: .5rem;
            width: 80vw;
          }
  
          button {
            border: 1px solid #cacaca;
            border-radius: 5px;
            padding: 1rem;
            margin-bottom: .5rem;
          }
        `}</style>
        <form className="contact-form" onSubmit={ props.onSubmit }>
          <fieldset>
            <label htmlFor="first_name">First Name</label>
            <input 
              onChange={props.onFirstNameChange} 
              type="text" 
              name="first_name" 
              id="first_name"
              placeholder="First Name"
              value={props.state.firstName}
              inputMode={`text`}
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="last_name">Last Name</label>
            <input 
              type="text" 
              name="last_name" 
              id="last_name"
              onChange={props.onLastNameChange}
              value={props.state.lastName}
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
              onChange={props.onEmailChange}
              placeholder="your@email.com"
              value={props.state.email} 
              inputMode={`email`}
              required />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message"
              onChange={props.onMessageChange}
              value={props.state.message}
              inputMode={`text`}
              required>
            </textarea>
          </fieldset>
          <div className="button-wrapper">
            <button type="submit" className="btn">{ props.state.buttonText }</button>
          </div>
        </form>
      </div>
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
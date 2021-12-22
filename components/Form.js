import {
  func,
  object,
} from 'prop-types';
import { 
  Image, 
  CloudinaryContext, 
  Transformation,
 } from 'cloudinary-react';

import styles from './form.module.scss';

function Form( {
  onSubmit, 
  onFirstNameChange, 
  onLastNameChange, 
  onEmailChange, 
  onMessageChange, 
  data,
  buttonText,
  state,
} ) {
  const { 
    sent,
    firstName,
    lastName,
    email,
    message,
    loading,
  } = state;

  const textData = data.textData[0];

  if ( !sent ) {
    return (
      <section className={styles.formWrapper}>
        <div className={styles.flex}>
          <div className={styles.col}>
            {textData && (
              textData.titles && textData.titles.map( ( title, index ) => (
                <div key={index} dangerouslySetInnerHTML={{__html: title}} />
              ))
            )}
            {textData && (
              textData.paragraphs && textData.paragraphs.map( (paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
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
                        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
                      ))}
                    </li>
                  ))}
                </ul>
              ))
            )}
            {loading ?
              (
                <div className={styles.loadingScreen}>
                  <h5>Sending...</h5>
                  <img 
                    className={styles.rotating} 
                    src={`/images/loading.svg`} 
                    alt={`Contacting email server`} 
                  />
                </div>
              ) :
              (
                <form 
                  className={styles.form}
                  onSubmit={onSubmit}
                >
                  <fieldset className={styles.fieldset}>
                    <label 
                      htmlFor="first_name"
                      className={styles.label}
                    >First Name</label>
                    <input 
                      onChange={onFirstNameChange} 
                      type="text" 
                      name="first_name" 
                      id="first_name"
                      placeholder="First Name"
                      value={firstName}
                      inputMode={`text`}
                      className={styles.input}
                      required />
                  </fieldset>
                  <fieldset  className={styles.fieldset}>
                    <label 
                      htmlFor="last_name"
                      className={styles.label}
                    >Last Name</label>
                    <input 
                      type="text" 
                      name="last_name" 
                      id="last_name"
                      onChange={onLastNameChange}
                      value={lastName}
                      placeholder="Last Name"
                      inputMode={`text`}  
                      className={styles.input}
                      required />
                  </fieldset>
                  <fieldset className={styles.fieldset}>
                    <label 
                      htmlFor="email"
                      className={styles.label}
                    >Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      onChange={onEmailChange}
                      placeholder="your@email.com"
                      value={email} 
                      inputMode={`email`}
                      className={styles.input}
                      required />
                  </fieldset>
                  <fieldset  className={styles.fieldset}>
                    <label 
                      htmlFor="message"
                      className={styles.label}
                    >Message</label>
                    <textarea 
                      name="message" 
                      id="message"
                      onChange={onMessageChange}
                      value={message}
                      inputMode={`text`}
                      className={styles.textarea}
                      required>
                    </textarea>
                  </fieldset>
                  <div className={styles.buttonWrapper}>
                    <button type="submit" className="btn">{buttonText}</button>
                  </div>
                </form>    
              )
            }
            </div>
          <div className={styles.col}>
            <CloudinaryContext cloudName="tpierce36">
              <div className={styles.imgWrapper}>
                <Image 
                  publicId={data.image.path}
                  responsive
                  width="auto"
                  crop="scale"
                  className={styles.img}
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
      <section className={styles.formWrapper}>
        <div className={styles.flex}>
          <div className={styles.text}>
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
            <div className={styles.loadingScreen}>
              <h4>Message Received!</h4>
              <p>Thanks for you interest! I will contact you as soon as possible.</p>
            </div>
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
  }
}

Form.propTypes = {
  onFirstNameChange: func.isRequired,
  onLastNameChange: func.isRequired,
  onMessageChange: func.isRequired,
  onEmailChange: func.isRequired,
  onSubmit: func.isRequired,
  state: object.isRequired,
}

export default Form;

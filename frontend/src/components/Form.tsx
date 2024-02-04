import { useState } from 'react';

import styles from './form.module.scss';

export default function Form() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState({
    hasError: false,
    message: '',
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    // set loading state in case the post takes a while for some reason
    setIsLoading(true);

    const contactForm = document.getElementById('contact') as HTMLFormElement;
    const formData = new FormData(contactForm);

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // TODO should probably just move these URLs to the .env too
      const env = process.env.NODE_ENV;
      
      // http://custommail.caddolakebayoutours.com/
      // https://dev-custommail.caddolakebayoutours.com/
      // const url = env === 'development' ? 'http://localhost:3001/send/mail' : 'https://caddo-email-server.herokuapp.com/send/mail';
      const url = env === 'development' ? 'http://localhost:3001/send/mail' : 'https://dev-custommail.caddolakebayoutours.com/';

      console.log(`Sending to ${url}`);

      // send info to the form
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(rawFormData) // body data type must match "Content-Type" header
      });
  
      // set submission to true if we made it here
      // TODO maybe also set session or local storage to prevent them from sending messages over and over?
      // have not complained about form abuse though
      setHasSubmitted(true);

      // turn loading state off
      setIsLoading(false);
    } catch (error: any) {
      console.log({
        error,
      });
      // set error state
      setHasError({
        hasError: true,
        message: error?.message,
      });

      // turn off loading if we know we have an error
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.formWrapper}>
      {/* TODO replace with cool spinner or something */}
      {isLoading && (
        <p>Loading...</p>
      )}
      {hasError.hasError && (
        <div className={styles.errorMessageWrapper}>
          <p>Looks like we had an issue sending the email!</p>
          <p>Please try again later or contact via phone.</p>
        </div>
      )}
      <h3>Contact via email</h3>
      {!hasSubmitted && (
        <form
          onSubmit={(e: any) => handleSubmit(e)}
          id="contact"
          className={styles.form}
        >
          <fieldset disabled={isLoading}>
            <label id="name" htmlFor="name">Name: 
              <input
                id="name"
                type="text"
                name="name"
                placeholder='Name'
                required
                className={`${hasError.hasError ? styles.hasError : ''}`}
              />
            </label>
            <label id="email" htmlFor="email">Email: 
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Email'
                required
                className={`${hasError.hasError ? styles.hasError : ''}`}
              />
            </label>
            <label id="message" htmlFor="message">Message: 
              <textarea
                id="message"
                name="message"
                required
                className={`${hasError.hasError ? styles.hasError : ''}`}
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      )}
      {hasSubmitted && (
        <div>
          <h4>Thank you!</h4>
          <p>We will be in contact with you as soon as we can!</p>
        </div>
      )}
    </div>
  );
};

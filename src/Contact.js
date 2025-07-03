import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useState } from 'react';

function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b3da352d-bc4b-4314-9bfa-36d8cad0d637");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        text: 'Message sent!',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    } else {
      setResult(data.message);
    }
  };
  return (
    <section id='contact' className='contact-section'>
      <h1 className='contact-title'>Get in touch.</h1>
      <p className='contact-text'>Interested to collaborate or have any questions? Reach out via email, phone, or connect through my socials!</p>
      <form onSubmit={onSubmit}>
        <div className='input-box'>
          <label>Full Name</label>
          <input name='name' className='field' placeholder='Enter your name' required/>
        </div>
        <div className='input-box'>
          <label>Email Address</label>
          <input name='email' className='field' placeholder='Enter your email' required/>
        </div>
        <div className='input-box'>
          <label>Your Message</label>
          <textarea name='message'className='msg' placeholder='Enter your message' required></textarea>
        </div>
        <button>Submit</button>
      </form>
      <div className='contact'>
        <p className='follow'>Follow me on my socials!</p>
        <div className='icons'>
          <div>
            <a href='https://www.instagram.com/erxc._.n?igsh=NHZ4cDZqNDA5dmpk' target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div>
            <a href='https://github.com/ericnii' target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/eric-ni-017985225/' target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const refForm = useRef();

  const refCaptcha = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const [open, setOpen] = useState(false);

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const testCaptcha = (captchaValue) => {
  //   console.log(`captchaValue ${captchaValue}`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();
    console.log('token', token);
    const params = {
      ...toSend,
      'g-recaptcha-response': token,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        params,
        process.env.REACT_APP_EMAIL_JS_USER
        // `g-recaptcha-response: ${}`
      )
      .then(
        ({ status }) => {
          console.log('EMAILJS SENT', status.code);
        },
        (err) => {
          console.log('EMAILJS ERROR', err);
        }
      );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // console.log('teste', process.env.REACT_APP_EMAIL_JS_USER);

  //   console.log('test34', )

  //   emailjs
  //     .sendForm(

  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   // emailjs
  //   //   .send(
  //   //     ,
  //   //     ,
  //   //     values,
  //   //
  //   //   )
  //   //   .then(
  //   //     (result) => {
  //   //       alert(result.text);
  //   //       window.location.reload(false);
  //   //     },
  //   //     (error) => {
  //   //       alert(error.text);
  //   //     }
  //   //   );
  // };

  // const handleChange = (e) => {
  //   setValues((values) => ({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            If you would like to get in touch with me, please do not hesitate to
            contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    value={open.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    value={open.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    value={open.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    value={open.message}
                    onChange={handleChange}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <ReCAPTCHA
                ref={refCaptcha}
                sitekey={process.env.REACT_APP_SITE_KEY}
                // onChange={testCaptcha}
              />
            </form>
          </div>
        </div>
        <div className="info-map">
          Thiago Bernardi,
          <br />
          São Paulo, SP <br />
          Brasil
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[-23.548059243667304, -46.63453909542767]}
            zoom={3}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-23.548059243667304, -46.63453909542767]}>
              <Popup>Thiago Bernardi</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;

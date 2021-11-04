import React from "react";
import emailjs from "emailjs-com";
import {
  ButtonSubmit,
  ContactMeAnimation,
  ContainerForm,
  Cube,
  DescriptionForm,
  ListSocial,
  SocialContainer,
  SocialDescription,
} from "./Form.elements";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import Lottie from "react-lottie-player";
import lottieAnimation from "../../Lotties/43239-contact-sent-email.json";
import { useDispatch } from "react-redux";
import { toggleValue } from "../../redux/actions/toggleAction";

const OpenPage = (page) => window.open(page);

const Form = () => {
  const dispatch = useDispatch();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_25tb6wm",
        e.target,
        "user_pwMdZYAhNypPtOpGlGxqS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    dispatch(toggleValue());
  }

  const stylesSocial = {
    height: "100%",
    width: "30px",
    cursor: "pointer",
    margin: "2px",
  };

  return (
    <>
      <ContainerForm>
        <ContactMeAnimation>
          <Cube>
            <Lottie
              loop
              animationData={lottieAnimation}
              play
              style={{
                width: 250,
                height: 250,
                position: "absolute",
                left: "-200px",
                top: "-120px",
                zIndex: 9,
                transform: "rotate(30deg)",
              }}
            />
            <p className="textContact">CONTACT ME</p>
          </Cube>
        </ContactMeAnimation>
        <DescriptionForm>
          <SocialDescription>
            <SocialContainer>
              <h3>Thanks for watching my portfolio</h3>
              <p style={{ textAlign: "center" }}>
                if you want contact me for any job or job offer, you do not
                hesitate to do it here
              </p>
            </SocialContainer>
            <SocialContainer>
              <p>you can find me in the following networks</p>
              <ListSocial>
                <FaFacebookSquare
                  style={stylesSocial}
                  onClick={() =>
                    OpenPage("https://www.facebook.com/ElLucasConde/")
                  }
                />
                <FaTwitterSquare
                  style={stylesSocial}
                  onClick={() => OpenPage("https://twitter.com/LucasConde7")}
                />
                <FaGithubSquare
                  style={stylesSocial}
                  onClick={() => OpenPage("https://github.com/CondeReggi")}
                />
                <FaLinkedin
                  style={stylesSocial}
                  onClick={() =>
                    OpenPage(
                      "https://www.linkedin.com/in/lucas-conde-5b8227216/?locale=es_ES"
                    )
                  }
                />
              </ListSocial>
            </SocialContainer>
          </SocialDescription>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input
              className="inputname"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
            <label>Email</label>
            <input
              className="inputemail"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <label>Message</label>
            <textarea
              className="inputmessage"
              name="message"
              placeholder="Message"
              required
            />
            <ButtonSubmit className="inputbutton" type="submit" value="Send" />
          </form>
        </DescriptionForm>
      </ContainerForm>
    </>
  );
};

export default Form;

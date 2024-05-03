import "./contact.scss";
import { GiRaiseZombie } from "react-icons/gi";
import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import { FaDev } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-center-texts">
          <p className="contact-bold-text">Let's work together.</p>
          <p className="contact-small-text">
            Feel free to reach out if you want to collaborate with me or simply
            have a chat.
          </p>
        </div>
        <div className="say-hello-btn-wrapper">
          <a href="mailto:imiebo.godson@gmail.com" className="say-hello-btn">
            Hit Me Up!
            <GiRaiseZombie className="say-hello-btn-icon" />
          </a>
        </div>
        {/* <div className='underlay-icon-wrapper'>
                    <GiTargeting className='underlay-icon'/>
                </div> */}
        <div className="footer-social-links-wrapper">
          <a
            href="https://twitter.com/dev_oye"
            target="_blank"
            rel="noreferrer"
            className="twitter2"
            aria-label="View my twitter profile"
          >
            <RiTwitterLine className="footer-social-links" />
          </a>
          <a
            href="https://github.com/ImieboGodson"
            target="_blank"
            rel="noreferrer"
            className="twitter2"
            aria-label="View my github profile"
          >
            <RiGithubLine className="footer-social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/godson-imiebo/"
            target="_blank"
            rel="noreferrer"
            className="twitter2"
            aria-label="View my linkedIn profile"
          >
            <RiLinkedinBoxLine className="footer-social-links" />
          </a>
          <a
            href="https://dev.to/imiebogodson"
            target="_blank"
            rel="noreferrer"
            className="twitter2"
            aria-label="View my dev.to profile"
            al
          >
            <FaDev className="footer-social-links" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

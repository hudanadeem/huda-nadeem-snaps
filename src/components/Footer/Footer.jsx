import "./Footer.scss";
import instagramIcon from "../../assets/images/Instagram.svg";
import twitterIcon from "../../assets/images/X_twitter.svg";
import facebookIcon from "../../assets/images/Facebook.svg";
import pinterestIcon from "../../assets/images/Pinterest.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links--conatiner">
          <h2>PhotoSync</h2>
          <div className="footer__links">
            <section className="footer__links--1">
              <h3>
                <a href="#">For photographers</a>
              </h3>
              <h3>
                <a href="#">Hire Talent</a>
              </h3>
              <h3>
                <a href="#">Insipration</a>
              </h3>
            </section>
            <section className="footer__links--2">
              <h3>
                <a href="#">About</a>
              </h3>
              <h3>
                <a href="#">Careers</a>
              </h3>
              <h3>
                <a href="#">Support</a>
              </h3>
            </section>
          </div>
        </div>
        <section className="footer__icon--container">
          <a href="https://www.facebook.com/">
            <img
              className="footer__icon"
              src={facebookIcon}
              alt="facebook"
            ></img>
          </a>
          <a href="https://www.x.com/">
            <img className="footer__icon" src={twitterIcon} alt="twitter"></img>
          </a>
          <a href="https://www.instagram.com/">
            <img
              className="footer__icon"
              src={instagramIcon}
              alt="instagram"
            ></img>
          </a>
          <a href="https://www.pinterest.com/">
            <img
              className="footer__icon"
              src={pinterestIcon}
              alt="pinterest"
            ></img>
          </a>
        </section>
      </div>
      <section className="footer__mark">
        <p>@ 2024 PhotoSync</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </section>
    </div>
  );
};

export default Footer;

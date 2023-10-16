import "./Footer.css"
import "../../assets/fonts/fonts.css"

import facebook from "../../assets/icons/brands/facebook.png"
import instagram from "../../assets/icons/brands/instagram.png"
import twitter from "../../assets/icons/brands/twitter.png"

const Footer = () => {
  return (
    <footer className="footer">
      
      
      <div className="footer-brand">
        
        <h2 className="footer-logo">Iconfood</h2>
        <ul>
          
        <li><a href="https://facebook.com/"><img src={facebook}/></a></li>
         <li><a href="https://instagram.com/"><img src={instagram}/></a></li>
          <li><a href="https://twitter.com/"><img src={twitter}/></a></li>
        </ul>
      </div>
      <nav className="footer-menu">
      <ul>
          <li>
            <a href="/">Company Info</a> 
            <ul className="sub-menu">
              <div className="stylelinks">
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/carrier">Carrier</a></li>
              <li><a href="/hiring">We Are Hiring</a></li>
              <li><a href="/blog">Blog</a></li>
              </div>
       
            </ul>
            </li>
          <li>
            <a href="/about">Legal</a>
            <ul className="sub-menu">
            <div className="stylelinks">
            <li><a href="/aboutus">About Us</a></li>
              <li><a href="/carrier">Carrier</a></li>
              <li><a href="/hiring">We Are Hiring</a></li>
              <li><a href="/blog">Blog</a></li>
              </div>
            </ul>
          </li>
          <li>
            <a href="/services">Features</a>
            <ul className="sub-menu">
            <div className="stylelinks">
              <li><a href="/feature1">Business Marketing</a></li>
              <li><a href="/feature2">User Analytic</a></li>
              <li><a href="/feature3">Live Chat</a></li>
              <li><a href="/feature4">Unlimited Support</a></li>
              </div>
            </ul>
          </li>
          <li>
            <a href="/contact">Resources</a>
            <ul className="sub-menu">
            <div className="stylelinks">
              <li><a href="/guides">IOS & Android</a></li>
              <li><a href="/blog">Watch a Demo</a></li>
              <li><a href="/videos">Customers</a></li>
              <li><a href="/faq">API</a></li>
              </div>
            </ul>
          </li>
          <li>
            <a href="/contact">Get In Touch</a>
            <ul className="sub-menu">
            <div className="stylelinks">
            <div className="footer-subscribe">
              
            <label><input type="email" id="email"name="email" className="emaillabel" placeholder="Your Email"/></label>
            <button className="emailbutton">Subsribe</button>
            </div>
            </div>
            </ul>
          </li>
        </ul>
      </nav>

      <p className="legacytitle">Made With Love By Finland - All Right Reserved </p>
    </footer>
  );
};

export default Footer;
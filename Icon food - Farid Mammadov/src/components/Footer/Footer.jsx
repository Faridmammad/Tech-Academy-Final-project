import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      
      
      <div className="footer-brand">
        <h2>IconFood</h2>
      <li><a href="/aboutus">Facebook</a></li>
              <li><a href="/carrier">Ig</a></li>
              <li><a href="/hiring">X - twitter</a></li>
      </div>
      <nav className="footer-menu">
      <ul>
          <li>
            <a href="/">Company Info</a>
            <ul className="sub-menu">
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/carrier">Carrier</a></li>
              <li><a href="/hiring">We Are Hiring</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </li>
          <li>
            <a href="/about">Legal</a>
            <ul className="sub-menu">
            <li><a href="/aboutus">About Us</a></li>
              <li><a href="/carrier">Carrier</a></li>
              <li><a href="/hiring">We Are Hiring</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </li>
          <li>
            <a href="/services">Features</a>
            <ul className="sub-menu">
              <li><a href="/feature1">Business Marketing</a></li>
              <li><a href="/feature2">User Analytic</a></li>
              <li><a href="/feature3">Live Chat</a></li>
              <li><a href="/feature4">Unlimited Support</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Resources</a>
            <ul className="sub-menu">
              <li><a href="/guides">IOS & Android</a></li>
              <li><a href="/blog">Watch a Demo</a></li>
              <li><a href="/videos">Customers</a></li>
              <li><a href="/faq">API</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Get In Touch</a>
            <ul className="sub-menu">
            </ul>
          </li>
        </ul>
      </nav>

      <p>Made With Love By Finland - All Right Reserved </p>
    </footer>
  );
};

export default Footer;
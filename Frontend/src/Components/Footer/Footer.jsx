import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about_us">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact_us">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Connect with Us Section */}
          <div className="col-lg-4">
            <h4>Connect with Us</h4>
            <ul className="social-icons">
              <li><a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a></li>
              <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="col-lg-4">
            <h4>Contact</h4>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

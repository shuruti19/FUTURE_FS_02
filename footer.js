import React from 'react';
import './footer.css'; // Fixed the import path

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Weather Dashboard. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
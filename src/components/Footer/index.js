import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import { Link } from 'gatsby';
import config from '../../../data/config';

const styles = {
  fontSize: '2.4em',
  textAlign: 'center'
};
const linkStyle = {
  color: '#fff',
  marginTop: 30,
  marginLeft: 10
};
const legal = {
  color: '#fff',
  textAlign: 'center'
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{config.copyright}</p>
        </div>
      </div>
      <div style={styles}>
        <a href="#">
          <FaFacebookSquare style={linkStyle} />
        </a>
        <a href="#">
          <FaTwitterSquare style={linkStyle} />
        </a>
        <a href="#">
          <FaInstagram style={linkStyle} />
        </a>
        <a href="#">
          <FaGithub style={linkStyle} />
        </a>
      </div>
      <br />
      <div className="content has-text-centered">
        <Link to="/terms" style={linkStyle}>
          Terms of Service
        </Link>
        <Link to="/privacy" style={linkStyle}>
          Privacy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

import { BsBoxSeam } from 'react-icons/bs';
import { BsCreditCard2Front } from 'react-icons/bs';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        {/* FOOTER TOP */}
        <div className="footer-top content">
          {/* FAST DELIVERY */}
          <div className="footer-top-item">
            <BsBoxSeam className="footer-icon" />
            <h3 className="item-title">Fast Delivery</h3>
            <p className="item-desc">Deliver in 24 hours max!</p>
          </div>

          {/* SAFE PAYMENT */}
          <div className="footer-top-item">
            <BsCreditCard2Front className="footer-icon" />
            <h3 className="item-title">Safe Payment</h3>
            <p className="item-desc">Visa, Mastercard, PayPal...</p>
          </div>

          {/* FREE RETURNS */}
          <div className="footer-top-item">
            <HiOutlineCheckBadge className="footer-icon" />
            <h3 className="item-title">Free Returns</h3>
            <p className="item-desc">Free returns within 15 days</p>
          </div>

          {/* HELP CENTER */}
          <div className="footer-top-item">
            <IoChatboxEllipsesOutline className="footer-icon" />
            <h3 className="item-title">Help Center</h3>
            <p className="item-desc">Dedicated 24/7 support</p>
          </div>
        </div>

        {/* FOOTER MIDDLE */}
        <div className="footer-middle content">
          {/* CONTACT US */}
          <div className="footer-middle-item">
            <h3 className="item-title">Contact Us</h3>
            <p>Got Question? Call us 24/7</p>
            <p>
              <Link to="tel:+84123456789">+84 123 456 789</Link>
            </p>
            <p>268 St, South New York/NY 98944, United States.</p>
            <p>
              <Link to="mailto:notag.contact@gmail.com">notag.contact@gmail.com</Link>
            </p>

            <div className="footer-social-icon">
              <Link to="#!">
                <img src="../images/twitter.svg" alt="Twitter NotaG" />
              </Link>
              <Link to="#!">
                <img src="../images/facebook.svg" alt="Facebook NotaG" />
              </Link>
              <Link to="#!">
                <img src="../images/pinterest.svg" alt="Pinterest NotaG" />
              </Link>
              <Link to="#!">
                <img src="../images/instagram.svg" alt="Instagram NotaG" />
              </Link>
              <Link to="#!">
                <img src="../images/youtube.svg" alt="Youtube NotaG" />
              </Link>
              <Link to="#!">
                <img src="../images/tiktok.svg" alt="TikTok NotaG" />
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="footer-middle-item">
            <h3 className="item-title">Customer Service</h3>
            <ul>
              <li>
                <Link to="#!">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#!">Refund Policy</Link>
              </li>
              <li>
                <Link to="#!">Shipping & Return</Link>
              </li>
              <li>
                <Link to="#!">Term & Conditions</Link>
              </li>
              <li>
                <Link to="#!">Advanced Search</Link>
              </li>
              <li>
                <Link to="#!">Store Locations</Link>
              </li>
            </ul>
          </div>

          {/* SHOP BY CATEGORIES */}
          <div className="footer-middle-item">
            <h3 className="item-title">Shop By Categories</h3>
            <ul>
              <li>
                <Link to="#!">Smartphone</Link>
              </li>
              <li>
                <Link to="#!">Headphones</Link>
              </li>
              <li>
                <Link to="#!">Computer & Desktop</Link>
              </li>
              <li>
                <Link to="#!">Cameras & Photos</Link>
              </li>
              <li>
                <Link to="#!">Laptop & Ipad</Link>
              </li>
            </ul>
          </div>

          {/* SIGN UP */}
          <div className="footer-middle-item">
            <h3 className="item-title">Sign Up to Newsletter</h3>
            <p>
              Enter your email address to get $10 off your first order and free shipping. Updates
              information on Sales and Offers.
            </p>
            <div className="subscribe-form">
              <input type="text" placeholder="Enter your email..." />
              <Link className="btn">Subscribe</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

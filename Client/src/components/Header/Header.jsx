import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

import { IoMenu } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';

import './Header.scss';

function Header() {
  return (
    <div className="header-wrapper">
      {/* CONTAINER */}
      <div className="header-container content">
        {/* MENU MOBILE */}
        <div className="header-menu-mobile">
          <IoMenu className="header-icon" />
        </div>

        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
            <img src="../images/LogoUmilux.png" alt="Umilux" />
          </Link>
        </div>

        {/* SEARCH */}
        <div className="header-search">
          <div className="header-search-icon">
            <IoSearch />
          </div>
          <div className="header-search-bar">
            <input type="text" placeholder="I'm looking for..." />
          </div>
          <div className="header-search-btn">
            <button className="btn">Search</button>
          </div>
        </div>

        {/* USER */}
        <div className="header-user">
          {/* ACCOUNT */}
          <div className="header-account">
            <IoPersonOutline className="header-icon" />
            <div className="header-actions">
              <p className="secondary-action">Login</p>
              <h4 className="primary-action">Account</h4>
            </div>
          </div>

          {/* WISHLIST */}
          <div className="header-wishlist">
            <Badge
              count={3}
              style={{
                fontSize: '10px',
                fontWeight: '500',
                background: '#0d53bb',
                transform: 'translate(-20%, -30%)',
              }}
            >
              <MdFavoriteBorder className="header-icon" />
            </Badge>
          </div>

          {/* CART */}
          <div className="header-cart">
            <Badge
              count={12}
              style={{
                fontSize: '10px',
                fontWeight: '500',
                background: '#0d53bb',
                transform: 'translate(-20%, -30%)',
              }}
            >
              <BsCart2 className="header-icon" />
            </Badge>
            <div className="header-actions">
              <p className="secondary-action">Cart</p>
              <h4 className="primary-action">$0.00</h4>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH MOBILE */}
      <div className="header-search-mobile">
        <div className="header-search-icon">
          <IoSearch className="header-icon" />
        </div>
        <div className="header-search-bar">
          <input type="text" placeholder="I'm looking for..." />
        </div>
        <div className="header-search-btn">
          <button className="btn">Search</button>
        </div>
      </div>

      {/* ALL MENU */}
      <div className="header-all-menu">
        <div className="header-all-menu-container content">
          <div className="header-menu">
            <IoMenu className="header-icon" />
            <h3>All Departments</h3>
          </div>

          <div className="header-categories">
            <ul>
              <li>
                <Link to="#!">Home</Link>
              </li>
              <li>
                <Link to="#!">Shop</Link>
              </li>
              <li>
                <Link to="#!">Product</Link>
              </li>
              <li>
                <Link to="#!">Blog</Link>
              </li>
              <li>
                <Link to="#!">Page</Link>
              </li>
              <li>
                <Link to="#!">Sale</Link>
              </li>
              <li>
                <Link to="#!">Buy Umilux</Link>
              </li>
            </ul>
          </div>

          <div className="header-recent">
            <Link to="#!">
              <MdAccessTime className="header-menu-icon" />
            </Link>
            <Link to="#!">
              <h3>Recently viewed products</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

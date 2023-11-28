import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

import { IoMenu } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';

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
            <img src="../images/LogoUmilux2.png" alt="Umilux" />
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
          <img src="../../../public/vector.svg" alt="" />
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
        <div className="header-menu"></div>
      </div>
    </div>
  );
}

export default Header;

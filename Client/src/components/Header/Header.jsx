import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import OutsideClickHandler from 'react-outside-click-handler';

import { IoMenu } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';

import { HiDesktopComputer } from 'react-icons/hi';
import { HiOutlineDeviceTablet } from 'react-icons/hi';
import { HiOutlinePrinter } from 'react-icons/hi';
import { SlScreenSmartphone } from 'react-icons/sl';
import { MdOutlineKeyboardAlt } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { BsSmartwatch } from 'react-icons/bs';
import { FaHeadphones } from 'react-icons/fa6';
import { TbDeviceImacHeart } from 'react-icons/tb';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { FaAngleRight } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa6';

import './Header.scss';

function Header() {
  const [allCategories, setAllCategories] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleAllSubMenuClick = () => {
    setIsSubMenuVisible((prevVisible) => !prevVisible);
  };

  const handleAllCategoriesClick = () => {
    setAllCategories((prevActive) => {
      return prevActive !== 'TopSellingProducts' ? 'TopSellingProducts' : 'AllCategories';
    });
  };

  return (
    <div className="header-wrapper">
      {/* CONTAINER */}
      <div className="header-container content">
        {/* MENU MOBILE */}
        <div className="header-menu-mobile">
          <IoMenu className="header-icon hover3" />
        </div>

        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
            <img src="../images/NotaGLogo.png" alt="NotaG" className="hover3" />
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
      <div className="header-all-menu content">
        <div className="header-all-menu-container ">
          <div className="header-menu" onClick={handleAllSubMenuClick}>
            <IoMenu className="header-menu-icon" />
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

        {/* ALL SUB MENU */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsSubMenuVisible(false);
          }}
        >
          <div className={`sub-menu ${isSubMenuVisible ? 'show' : ''}`}>
            <ul className="sub-menu-menu">
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <HiDesktopComputer className="sub-menu-icon" />
                  <span>Computer & Laptop</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      <h4>Laptop & Computers</h4>
                      <li>
                        <Link to="#!">Computers</Link>
                      </li>
                      <li>
                        <Link to="#!">Desktops & Monitors</Link>
                      </li>
                      <li>
                        <Link to="#!">Hard Drives & Memory Cards</Link>
                      </li>
                      <li>
                        <Link to="#!">Printers & Ink</Link>
                      </li>
                      <li>
                        <Link to="#!">Networking & Internet Devices</Link>
                      </li>
                      <li>
                        <Link to="#!">Computer Accessories</Link>
                      </li>
                      <li>
                        <Link to="#!">Software Computers</Link>
                      </li>

                      <h4>Cameras</h4>
                      <li>
                        <Link to="#!">Digital Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Professional & SLR Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Camcorders & Video Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Camera Lenses & Accessories</Link>
                      </li>
                      <li>
                        <Link to="#!">CCTV Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Other Accessories</Link>
                      </li>
                    </div>
                    <div className="sub-menu-sub-menu-col">
                      <h4>Home Audio</h4>
                      <li>
                        <Link to="#!">Wireless Audio</Link>
                      </li>
                      <li>
                        <Link to="#!">Premium Audio</Link>
                      </li>
                      <li>
                        <Link to="#!">Stereo Systems Components</Link>
                      </li>
                      <li>
                        <Link to="#!">Headphones</Link>
                      </li>
                      <li>
                        <Link to="#!">Speakers</Link>
                      </li>
                      <li>
                        <Link to="#!">Projectors And Screens</Link>
                      </li>
                      <li>
                        <Link to="#!">Turntables</Link>
                      </li>

                      <h4>Laptop & Computers</h4>
                      <li>
                        <Link to="#!">Computers</Link>
                      </li>
                      <li>
                        <Link to="#!">Desktops & Monitors</Link>
                      </li>
                      <li>
                        <Link to="#!">Hard Drives & Memory Cards</Link>
                      </li>
                      <li>
                        <Link to="#!">Printers & Ink</Link>
                      </li>
                      <li>
                        <Link to="#!">Networking & Internet Devices</Link>
                      </li>
                      <li>
                        <Link to="#!">Computer Accessories</Link>
                      </li>
                      <li>
                        <Link to="#!">Software Computers</Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <HiOutlineDeviceTablet className="sub-menu-icon" />
                  <span>Tablets & iPad</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      <h4>Cameras</h4>
                      <li>
                        <Link to="#!">Digital Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Professional & SLR Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Camcorders & Video Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Camera Lenses & Accessories</Link>
                      </li>
                      <li>
                        <Link to="#!">CCTV Cameras</Link>
                      </li>
                      <li>
                        <Link to="#!">Other Accessories</Link>
                      </li>

                      <h4>Home Audio</h4>
                      <li>
                        <Link to="#!">Wireless Audio</Link>
                      </li>
                      <li>
                        <Link to="#!">Premium Audio</Link>
                      </li>
                      <li>
                        <Link to="#!">Stereo Systems Components</Link>
                      </li>
                      <li>
                        <Link to="#!">Headphones</Link>
                      </li>
                      <li>
                        <Link to="#!">Speakers</Link>
                      </li>
                      <li>
                        <Link to="#!">Projectors And Screens</Link>
                      </li>
                      <li>
                        <Link to="#!">Turntables</Link>
                      </li>
                    </div>

                    <div className="sub-menu-sub-menu-col">
                      <h4>Smartphone</h4>
                      <li>
                        <Link to="#!">Carrier Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Unlocked Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Phone & Cellphone</Link>
                      </li>
                      <li>
                        <Link to="#!">Cellphone Charges</Link>
                      </li>
                      <li>
                        <Link to="#!">Your Video Library</Link>
                      </li>
                      <li>
                        <Link to="#!">Watch Anywhere</Link>
                      </li>

                      <h4>Smartphone</h4>
                      <li>
                        <Link to="#!">Carrier Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Unlocked Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Phone & Cellphone</Link>
                      </li>
                      <li>
                        <Link to="#!">Cellphone Charges</Link>
                      </li>
                      <li>
                        <Link to="#!">Your Video Library</Link>
                      </li>
                      <li>
                        <Link to="#!">Watch Anywhere</Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <HiOutlinePrinter className="sub-menu-icon" />
                  <span>Printer & Cameras</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      <li>
                        <Link to="#!">Computers</Link>
                      </li>
                      <li>
                        <Link to="#!">Desktops & Monitors</Link>
                      </li>
                      <li>
                        <Link to="#!">Hard Drives & Memory Cards</Link>
                      </li>
                      <li>
                        <Link to="#!">Printers & Ink</Link>
                      </li>
                      <li>
                        <Link to="#!">Networking & Internet Devices</Link>
                      </li>
                      <li>
                        <Link to="#!">Computer Accessories</Link>
                      </li>
                      <li>
                        <Link to="#!">Software Computers</Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <SlScreenSmartphone className="sub-menu-icon" />
                  <span>Smart Phones</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      <li>
                        <Link to="#!">Carrier Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Unlocked Phones</Link>
                      </li>
                      <li>
                        <Link to="#!">Phone & Cellphone</Link>
                      </li>
                      <li>
                        <Link to="#!">Cellphone Charges</Link>
                      </li>
                      <li>
                        <Link to="#!">Your Video Library</Link>
                      </li>
                      <li>
                        <Link to="#!">Watch Anywhere</Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <MdOutlineKeyboardAlt className="sub-menu-icon" />
                  <span>Keyboard & Mouse</span>
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <CgGames className="sub-menu-icon" />
                  <span>Video Games</span>
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <MdOutlineSportsSoccer className="sub-menu-icon" />
                  <span>Sports & Outdoors</span>
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <BsSmartwatch className="sub-menu-icon" />
                  <span>Smart Watch</span>
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <FaHeadphones className="sub-menu-icon" />
                  <span>Headphone & Audios</span>
                </Link>
              </li>
              <li
                className={`sub-menu-menu-item ${
                  allCategories === 'TopSellingProducts' ? 'active' : 'inactive'
                }`}
              >
                <Link to="#!">
                  <TbDeviceImacHeart className="sub-menu-icon" />
                  <span>Top Selling Products</span>
                </Link>
              </li>
              <li className={'sub-menu-menu-item'}>
                <Link onClick={handleAllCategoriesClick}>
                  <HiOutlineDotsCircleHorizontal className="sub-menu-icon" />
                  <span>All Categories</span>
                  {allCategories === 'TopSellingProducts' ? (
                    <FaMinus className="sub-menu-icon" />
                  ) : (
                    <IoMdAdd className="sub-menu-icon" />
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default Header;

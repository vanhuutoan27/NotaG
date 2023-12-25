import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import OutsideClickHandler from 'react-outside-click-handler';

import { IoMenu } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsCart2 } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';

import { MdOutlineLaptopMac } from 'react-icons/md';
import { IoIosTabletPortrait } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { TbDeviceWatch } from 'react-icons/tb';
import { TbDeviceAirpods } from 'react-icons/tb';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { GrGamepad } from 'react-icons/gr';
import { FaApple } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import { CgMoreO } from 'react-icons/cg';
import { FaAngleRight } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa6';

import './Header.scss';

function Header() {
  const [allCategories, setAllCategories] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);

  const handleResize = () => setWindowWidth(window.innerWidth);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSubMenu = () => {
    const shouldToggle =
      scrollY > window.innerHeight * 0.8 || (windowWidth <= 1280 && location.pathname === '/');
    setIsSubMenuVisible(shouldToggle ? !isSubMenuVisible : isSubMenuVisible);
  };

  const closeSubMenu = () => isSubMenuVisible && setIsSubMenuVisible(false);

  const handleAllCategoriesClick = () =>
    setAllCategories((prev) => (prev !== 'moreMore' ? 'moreMore' : 'AllCategories'));

  return (
    <div className="header-wrapper">
      {/* CONTAINER */}
      <div className="header-container content">
        {/* MENU MOBILE */}
        <div className="header-menu-mobile">
          <IoMenu className="header-icon " />
        </div>

        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
            <img src="../images/NotaGLogo.png" alt="NotaG" />
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
          <div className="header-menu" onClick={toggleSubMenu}>
            <IoMenu className="header-menu-icon" />
            <h3>All Departments</h3>
          </div>

          <div className="header-categories">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#!">Shop</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
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
        <OutsideClickHandler onOutsideClick={closeSubMenu}>
          <div className={`sub-menu ${isSubMenuVisible ? 'show' : ''}`}>
            <ul className="sub-menu-menu">
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <MdOutlineLaptopMac className="sub-menu-icon" />
                  <span>Mac</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      {/* MacBook Air */}
                      <h4>MacBook Air</h4>
                      <li>
                        <Link to="#!">MacBook Air 13 Inch Chip M1</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Air 13 Inch Chip M2</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Air 15 Inch Chip M2</Link>
                      </li>

                      {/* MacBook Pro */}
                      <h4>MacBook Pro</h4>
                      <li>
                        <Link to="#!">MacBook Pro 14 Inch Chip M3</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Pro 14 Inch Chip M3 Pro</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Pro 14 Inch Chip M3 Max</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Pro 16 Inch Chip M3 Pro</Link>
                      </li>
                      <li>
                        <Link to="#!">MacBook Pro 16 Inch Chip M3 Max</Link>
                      </li>

                      {/* iMac */}
                      <h4>iMac</h4>
                      <li>
                        <Link to="#!">iMac 8 Core CPU, 8 Core GPU, 256GB</Link>
                      </li>
                      <li>
                        <Link to="#!">iMac 8 Core CPU, 10 Core GPU, 256GB</Link>
                      </li>
                      <li>
                        <Link to="#!">iMac 8 Core CPU, 10 Core GPU, 512GB</Link>
                      </li>
                    </div>

                    <div className="sub-menu-sub-menu-col">
                      {/* Mac Mini */}
                      <h4>Mac Mini</h4>
                      <li>
                        <Link to="#!">Mac Mini 8 Core CPU, 10 Core GPU, 8GB, 256GB</Link>
                      </li>
                      <li>
                        <Link to="#!">Mac Mini 8 Core CPU, 10 Core GPU, 8GB, 512GB</Link>
                      </li>
                      <li>
                        <Link to="#!">Mac Mini 10 Core CPU, 16 Core GPU, 16GB, 512GB</Link>
                      </li>

                      {/* Mac Studio */}
                      <h4>Mac Studio</h4>
                      <li>
                        <Link to="#!">
                          Mac Studio 12 Core CPU, 30 Core GPU, 16 Core Neural Engine
                        </Link>
                      </li>
                      <li>
                        <Link to="#!">
                          Mac Studio 24 Core CPU, 60 Core GPU, 32 Core Neural Engine
                        </Link>
                      </li>

                      {/* Mac Pro */}
                      <h4>Mac Pro</h4>
                      <li>
                        <Link to="#!">Mac Pro Vertical Tower Form</Link>
                      </li>
                      <li>
                        <Link to="#!">Mac Pro Horizontal Barrel Form</Link>
                      </li>
                    </div>

                    <div className="sub-menu-sub-menu-col">
                      {/* Display */}
                      <h4>Display</h4>
                      <li>
                        <Link to="#!">Studio Display</Link>
                      </li>
                      <li>
                        <Link to="#!">Pro Display XDR</Link>
                      </li>
                    </div>

                    {/* <div className="sub-menu-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/sub-menu-sub-menu-item-1.png" alt="" />
                    </Link>
                  </div> */}
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <IoIosTabletPortrait className="sub-menu-icon" />
                  <span>iPad</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
                <ul className="sub-menu-sub-menu-item">
                  <div className="sub-menu-sub-menu-row">
                    <div className="sub-menu-sub-menu-col">
                      <h4>iPad Pro</h4>
                      <li>
                        <Link to="#!">iPad Pro 11 Inch, Liquid Retina Display</Link>
                      </li>
                      <li>
                        <Link to="#!">iPad Pro 12.9 Inch, Liquid Retina XDR Display</Link>
                      </li>

                      <h4>iPad Air</h4>
                      <li>
                        <Link to="#!">iPad Air 10.9 Inch, Liquid Retina Display</Link>
                      </li>

                      <h4>iPad</h4>
                      <li>
                        <Link to="#!">iPad 10th Generation, 10.9 Inch, Liquid Retina Display</Link>
                      </li>
                      <li>
                        <Link to="#!">iPad 9th Generation, 10.2 Inch, Retina Display</Link>
                      </li>

                      <h4>iPad Mini</h4>
                      <li>
                        <Link to="#!">iPad Mini 8.3 Inch, Liquid Retina Display</Link>
                      </li>
                    </div>

                    {/* <div className="sub-menu-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/sub-menu-sub-menu-item-2.png" alt="" />
                    </Link>
                  </div> */}
                  </div>
                </ul>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <IoPhonePortraitOutline className="sub-menu-icon" />
                  <span>iPhone</span>
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
                  <TbDeviceWatch className="sub-menu-icon" />
                  <span>Watch</span>
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
                  <TbDeviceAirpods className="sub-menu-icon" />
                  <span>AirPods</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <HiMiniComputerDesktop className="sub-menu-icon" />
                  <span>TV & Home</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <GrGamepad className="sub-menu-icon" />
                  <span>Entertainment</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <FaApple className="sub-menu-icon" />
                  <span>Accessories</span>
                  <FaAngleRight className="sub-menu-icon-more" />
                </Link>
              </li>
              <li className="sub-menu-menu-item">
                <Link to="#!">
                  <BiSupport className="sub-menu-icon" />
                  <span>Support</span>
                </Link>
              </li>
              <li
                className={`sub-menu-menu-item ${
                  allCategories === 'moreMore' ? 'active' : 'inactive'
                }`}
              >
                <Link to="#!">
                  <CgMoreAlt className="sub-menu-icon" />
                  <span>More...</span>
                </Link>
              </li>
              <li className={'sub-menu-menu-item'}>
                <Link onClick={handleAllCategoriesClick}>
                  <CgMoreO className="sub-menu-icon" />
                  <span>All Categories</span>
                  {allCategories === 'moreMore' ? (
                    <FaMinus className="sub-menu-icon" />
                  ) : (
                    <IoMdAdd className="sub-menu-icon" />
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`overlay ${isSubMenuVisible ? 'show' : ''}`} onClick={closeSubMenu}></div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default Header;

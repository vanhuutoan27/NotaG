import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

import data from '../../../utils/hero.json';
import './Hero.scss';

function Hero() {
  const [allCategories, setAllCategories] = useState(null);

  const handleAllCategoriesClick = () => {
    setAllCategories((prevActive) => {
      return prevActive !== 'TopSellingProducts' ? 'TopSellingProducts' : 'AllCategories';
    });
  };

  const swiperParams = {
    modules: [Autoplay, EffectFade, Pagination],
    speed: 500,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className="hero-wrapper">
      {/* HERO  */}
      <div className="hero-container content">
        {/* HERO LEFT */}
        <div className="hero-left">
          <ul className="hero-menu">
            <li className="hero-menu-item">
              <Link to="#!">
                <HiDesktopComputer className="hero-icon" />
                <span>Computer & Laptop</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/hero-sub-menu-item-1.png" alt="" />
                    </Link>
                  </div>
                </div>
              </ul>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <HiOutlineDeviceTablet className="hero-icon" />
                <span>Tablets & iPad</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/hero-sub-menu-item-2.png" alt="" />
                    </Link>
                  </div>
                </div>
              </ul>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <HiOutlinePrinter className="hero-icon" />
                <span>Printer & Cameras</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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
            <li className="hero-menu-item">
              <Link to="#!">
                <SlScreenSmartphone className="hero-icon" />
                <span>Smart Phones</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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
            <li className="hero-menu-item">
              <Link to="#!">
                <MdOutlineKeyboardAlt className="hero-icon" />
                <span>Keyboard & Mouse</span>
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <CgGames className="hero-icon" />
                <span>Video Games</span>
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <MdOutlineSportsSoccer className="hero-icon" />
                <span>Sports & Outdoors</span>
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <BsSmartwatch className="hero-icon" />
                <span>Smart Watch</span>
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <FaHeadphones className="hero-icon" />
                <span>Headphone & Audios</span>
              </Link>
            </li>
            <li
              className={`hero-menu-item ${
                allCategories === 'TopSellingProducts' ? 'active' : 'inactive'
              }`}
            >
              <Link to="#!">
                <TbDeviceImacHeart className="hero-icon" />
                <span>Top Selling Products</span>
              </Link>
            </li>
            <li className={'hero-menu-item'}>
              <Link onClick={handleAllCategoriesClick}>
                <HiOutlineDotsCircleHorizontal className="hero-icon" />
                <span>All Categories</span>
                {allCategories === 'TopSellingProducts' ? (
                  <FaMinus className="hero-icon" />
                ) : (
                  <IoMdAdd className="hero-icon" />
                )}
              </Link>
            </li>
          </ul>
        </div>

        {/* HERO RIGHT */}
        <div className="hero-right">
          <Swiper {...swiperParams}>
            {data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper">
                  {slide.image.endsWith('.mp4') ? (
                    <video autoPlay playsInline={true} loop="loop" muted="muted" preload="metadata">
                      <source src={slide.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={slide.image} alt={slide.heading} />
                  )}
                  <div className="swiper-container">
                    <h4 className="swiper-title">{slide.title}</h4>
                    <h2 className="swiper-heading">{slide.heading}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;

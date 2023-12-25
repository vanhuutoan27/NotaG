import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

import data from '../../../utils/hero.json';
import './Hero.scss';

function Hero() {
  const [allCategories, setAllCategories] = useState(null);

  const handleAllCategoriesClick = () => {
    setAllCategories((prevActive) => {
      return prevActive !== 'moreMore' ? 'moreMore' : 'AllCategories';
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
                <MdOutlineLaptopMac className="hero-icon" />
                <span>Mac</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
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

                  <div className="hero-sub-menu-col">
                    {/* Display */}
                    <h4>Display</h4>
                    <li>
                      <Link to="#!">Studio Display</Link>
                    </li>
                    <li>
                      <Link to="#!">Pro Display XDR</Link>
                    </li>
                  </div>

                  {/* <div className="hero-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/hero-sub-menu-item-1.png" alt="" />
                    </Link>
                  </div> */}
                </div>
              </ul>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <IoIosTabletPortrait className="hero-icon" />
                <span>iPad</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
              <ul className="hero-sub-menu-item">
                <div className="hero-sub-menu-row">
                  <div className="hero-sub-menu-col">
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

                  {/* <div className="hero-sub-menu-col">
                    <Link to="#!">
                      <img src="../images/hero-sub-menu-item-2.png" alt="" />
                    </Link>
                  </div> */}
                </div>
              </ul>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <IoPhonePortraitOutline className="hero-icon" />
                <span>iPhone</span>
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
                <TbDeviceWatch className="hero-icon" />
                <span>Watch</span>
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
                <TbDeviceAirpods className="hero-icon" />
                <span>AirPods</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <HiMiniComputerDesktop className="hero-icon" />
                <span>TV & Home</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <GrGamepad className="hero-icon" />
                <span>Entertainment</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <FaApple className="hero-icon" />
                <span>Accessories</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <BiSupport className="hero-icon" />
                <span>Support</span>
              </Link>
            </li>
            <li
              className={`hero-menu-item ${allCategories === 'moreMore' ? 'active' : 'inactive'}`}
            >
              <Link to="#!">
                <CgMoreAlt className="hero-icon" />
                <span>More...</span>
              </Link>
            </li>
            <li className={'hero-menu-item'}>
              <Link onClick={handleAllCategoriesClick}>
                <CgMoreO className="hero-icon" />
                <span>All Categories</span>
                {allCategories === 'moreMore' ? (
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

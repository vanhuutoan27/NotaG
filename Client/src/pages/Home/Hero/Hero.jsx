import React from 'react';
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
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { FaAngleRight } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { IoIosAdd } from 'react-icons/io';

import data from '../../../utils/heroSliders.json';
import './Hero.scss';

function Hero() {
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
      <div className="hero-container content">
        <div className="hero-left">
          <ul className="hero-menu">
            <li className="hero-menu-item">
              <Link to="#!">
                <HiDesktopComputer className="hero-icon" />
                <span>Computer & Laptop</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <HiOutlineDeviceTablet className="hero-icon" />
                <span>Tablets & iPad</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <HiOutlinePrinter className="hero-icon" />
                <span>Printer & Cameras</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
            </li>
            <li className="hero-menu-item">
              <Link to="#!">
                <SlScreenSmartphone className="hero-icon" />
                <span>Smart Phones</span>
                <FaAngleRight className="hero-icon-more" />
              </Link>
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
            <li className="hero-menu-item">
              <Link to="#!">
                <HiOutlineDotsCircleHorizontal className="hero-icon" />
                <span>All Categories</span>
                <IoIosAdd className="hero-icon" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hero-right">
          <Swiper {...swiperParams}>
            {data.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper">
                  {slide.image.endsWith('.mp4') ? (
                    <video autoPlay playsInline="true" loop="loop" muted="muted" preload="metadata">
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

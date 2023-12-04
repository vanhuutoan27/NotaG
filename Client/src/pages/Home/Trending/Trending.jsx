import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { LuChevronsRight } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';

import data from '../../../utils/trending.json';

import './Trending.scss';

function Trending() {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  const swiperSettings = {
    speed: 500,
    spaceBetween: 20,
    breakpoints: {
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <div className="trending-wrapper">
      <div className="trending-container content">
        {/* TRENDING HEADING */}
        <div className="trending-heading">
          <h3 className="primaryText">Trending This Week</h3>
          <Link to="#!">
            View All <LuChevronsRight className="trending-icon" />
          </Link>
        </div>

        {/* TRENDING CONTENT */}
        <div className="trending-content">
          <Swiper {...swiperSettings}>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="trending-item">
                  <Link to={item.link}>
                    <div className="image-container">
                      <img src={item.image1} alt={item.name} />
                      <img src={item.image2} alt={item.name} />
                    </div>
                  </Link>
                  <div className="trending-item-info">
                    <h5 className="trending-title">NOTAG</h5>
                    <h4 className="trending-name">
                      <Link to={item.link}>{item.name}</Link>
                    </h4>
                    <div className="trending-rating">{generateStars(item.rating)}</div>
                    <div className="trending-price">
                      <h3 className={`trending-new-price ${item.newPrice ? 'discounted' : ''}`}>
                        {item.newPrice || item.oldPrice}
                      </h3>
                      {item.newPrice && <h3 className="trending-old-price">{item.oldPrice}</h3>}
                    </div>
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

export default Trending;

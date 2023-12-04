import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { LuChevronsRight } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';

import data from '../../../utils/top-rated.json';

import './TopRated.scss';

function TopRated() {
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
    <div className="top-rated-wrapper">
      <div className="top-rated-container content">
        {/* TOP RATED HEADING */}
        <div className="top-rated-heading">
          <h3 className="primaryText">Top Rated Products</h3>
          <Link to="#!">
            View All <LuChevronsRight className="top-rated-icon" />
          </Link>
        </div>

        {/* TOP RATED CONTENT */}
        <div className="top-rated-content">
          <Swiper {...swiperSettings}>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="top-rated-item">
                  <Link to={item.link}>
                    <div className="image-container">
                      <img src={item.image1} alt={item.name} />
                      <img src={item.image2} alt={item.name} />
                    </div>
                  </Link>
                  <div className="top-rated-item-info">
                    <h5 className="top-rated-title">NOTAG</h5>
                    <h4 className="top-rated-name">
                      <Link to={item.link}>{item.name}</Link>
                    </h4>
                    <div className="top-rated-rating">{generateStars(item.rating)}</div>
                    <div className="top-rated-price">
                      <h3 className={`top-rated-new-price ${item.newPrice ? 'discounted' : ''}`}>
                        {item.newPrice || item.oldPrice}
                      </h3>
                      {item.newPrice && <h3 className="top-rated-old-price">{item.oldPrice}</h3>}
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

export default TopRated;

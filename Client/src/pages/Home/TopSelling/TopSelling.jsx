import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { LuChevronsRight } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';

import data from '../../../utils/top-selling.json';

import './TopSelling.scss';

function TopSelling() {
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
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="top-selling-wrapper">
      <div className="top-selling-container content">
        {/* top-selling HEADING */}
        <div className="top-selling-heading">
          <h3 className="primaryText">Top Selling Products</h3>
          <Link to="#!">
            View All <LuChevronsRight className="top-selling-icon" />
          </Link>
        </div>

        {/* TOP SELLING CONTENT */}
        <div className="top-selling-content">
          {/* TOP SELLING LEFT */}
          <div className="top-selling-left">
            <img src="../images/top-selling-img.jpg" alt="" />
          </div>

          {/* TOP SELLING RIGHT */}
          <div className="top-selling-right">
            <Swiper {...swiperSettings}>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="top-selling-item">
                    <Link to={item.link}>
                      <div className="image-container">
                        <img src={item.image1} alt={item.name} />
                        <img src={item.image2} alt={item.name} />
                      </div>
                    </Link>
                    <div className="top-selling-item-info">
                      <h5 className="top-selling-title">NOTAG</h5>
                      <h4 className="top-selling-name">
                        <Link to={item.link}>{item.name}</Link>
                      </h4>
                      <div className="top-selling-rating">{generateStars(item.rating)}</div>
                      <div className="top-selling-price">
                        <h3
                          className={`top-selling-new-price ${item.newPrice ? 'discounted' : ''}`}
                        >
                          {item.newPrice || item.oldPrice}
                        </h3>
                        {item.newPrice && (
                          <h3 className="top-selling-old-price">{item.oldPrice}</h3>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* SALE CONTENT */}
        <div className="sale-container">
          {/* SALE LEFT */}
          <div className="sale-left">
            <Link to="#!">
              <img src="../images/sale-left.png" alt="" />
              <div className="sale-text">
                <h4>
                  Super Sale <br />
                  B&O Beoplay. Save $599.00
                </h4>
                <span>Shop B&O Beoplay</span>
              </div>
            </Link>
          </div>

          {/* SALE RIGHT */}
          <div className="sale-right">
            <Link to="#!">
              <img src="../images/sale-right.png" alt="" />
              <div className="sale-text">
                <h4>
                  Deals Good <br />
                  Cellphone Ultra. Save $199.00
                </h4>
                <span>Shop Iphone Red</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;

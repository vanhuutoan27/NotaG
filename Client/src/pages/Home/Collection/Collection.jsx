import React from 'react';
import { Link } from 'react-router-dom';
import { LuChevronsRight } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Collection.scss';

function Collection() {
  const data = [
    {
      title: 'Smart Phones',
      products: [
        { name: 'iPhone', link: '/iphone' },
        { name: 'Phone Accessories', link: '/phone-accessory' },
        { name: 'Phone Cases', link: '/phone-case' },
        { name: 'Postpaid Phones', link: '/postpaid-phone' },
      ],
      image: '../images/collection-item-1.jpg',
      linkText: 'All Smartphone',
      link: '/smartphone',
    },
    {
      title: 'Tablets & iPads',
      products: [
        { name: 'Tablets', link: '/tablet' },
        { name: 'iPads', link: '/ipad' },
        { name: 'Windows Tablets', link: '/window-tablet' },
        { name: 'Tablet Accessories', link: '/tablet-accessory' },
      ],
      image: '../images/collection-item-2.jpg',
      linkText: 'All Tablets & iPads',
      link: '/tablet-ipad',
    },
    {
      title: 'Smart Watch',
      products: [
        { name: 'Sport Watches', link: '/sport-watch' },
        { name: 'Timex Watches', link: '/timex-watch' },
        { name: 'Watch Brands', link: '/watch-brand' },
        { name: 'Women Watches', link: '/women-watch' },
      ],
      image: '../images/collection-item-3.jpg',
      linkText: 'All Smart Watch',
      link: '/smart-watch',
    },
    {
      title: 'Accessories',
      products: [
        { name: 'Accessories', link: '/accessory' },
        { name: 'Chargers', link: '/charger' },
        { name: 'Power Banks', link: '/power-bank' },
        { name: 'Smartphones', link: '/smartphone' },
      ],
      image: '../images/collection-item-4.jpg',
      linkText: 'All Accessories',
      link: '/accessory',
    },
  ];

  const swiperSettings = {
    speed: 500,

    spaceBetween: 20,
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="collection-wrapper">
      <div className="collection-container content">
        {/* COLLECTION HEADING */}
        <div className="trending-heading">
          <h3 className="primaryText">Our Collections</h3>
        </div>

        {/* COLLECTION CONTENT */}
        <div className="collection-content">
          <Swiper {...swiperSettings}>
            {data.map((item, itemIndex) => (
              <SwiperSlide key={itemIndex}>
                <div className="collection-item" key={item.title + itemIndex}>
                  <div className="collection-left">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="collection-right">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.products.map((product, productIndex) => (
                        <li key={product.name + productIndex}>
                          <Link to={product.link}>{product.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <h2 className="all-link">
                      <Link to={item.link}>
                        {item.linkText} <LuChevronsRight className="all-link-icon" />
                      </Link>
                    </h2>
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

export default Collection;

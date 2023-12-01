import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { LuChevronsRight } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';

import data from '../../../utils/trending.json';

import './Trending.scss';

function Trending() {
  const [hoveredImage, setHoveredImage] = useState(null);

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
          {data.map((item, index) => (
            <div className="trending-item" key={index}>
              <Link to={item.link}>
                <img
                  src={hoveredImage === index ? item.image2 : item.image1}
                  alt={item.name}
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;

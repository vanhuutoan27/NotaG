import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { FaFireAlt } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';
import { TbRulerMeasure } from 'react-icons/tb';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FiMinus } from 'react-icons/fi';
import { IoAddOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GoStack } from 'react-icons/go';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuRecycle } from 'react-icons/lu';

import Layout from '../../layouts/Layout';
import './Product.scss';

function Product() {
  const sizes = ['32GB', '64GB', '128GB', '256GB'];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <Layout>
      <div className="product-wrapper">
        <div className="product-container content pt-40">
          {/* LEFT SIDE - IMAGE */}
          <div className="product-section product-left"></div>

          {/* RIGHT SIDE - INFORMATION */}
          <div className="product-section product-right">
            <h2 className="product-name">Apple iPhone 13 Mini 5G 128GB Pink - Unlocked</h2>

            {/* PRODUCT REVIEW*/}
            <div className="product-review">
              <Link to="#!">
                <div className="product-rate">{generateStars(4)} 12 Reviews</div>
              </Link>

              <div className="product-sold">
                <FaFireAlt className="icon" />
                10 sold in last 24 hours
              </div>
            </div>

            {/* PRODUCT PRICE*/}
            <p className="product-price">$55.00</p>

            {/* PRODUCT VIEWING RIGHT NOW */}
            <div className="product-view">
              <div className="product-view-icon">
                <FaRegEye className="icon" />
              </div>
              <p className="product-view-desc">27 people are viewing this right now</p>
            </div>

            {/* PRODUCT SIZE */}
            <div className="product-size">
              <p>
                Size: <span>{selectedSize}</span>
              </p>

              <div className="product-sizes">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className={`product-size-item ${size === selectedSize ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="product-addons">
                <div className="product-addons-item">
                  <Link to="#!">
                    <TbRulerMeasure className="icon" />
                    <p>Size Guide</p>
                  </Link>
                </div>
                <div className="product-addons-item">
                  <Link to="#!">
                    <BsQuestionCircleFill className="icon" />
                    <p>Ask a Question</p>
                  </Link>
                </div>
                <div className="product-addons-item">
                  <Link to="#!">
                    <IoShareSocialSharp className="icon" />
                    <p>Share</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* PRODUCT QUANTITY */}
            <div className="product-quantity">
              <button onClick={decreaseQuantity}>
                <FiMinus className="icon" />
              </button>
              <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
              <button onClick={increaseQuantity}>
                <IoAddOutline className="icon" />
              </button>
            </div>

            {/* PRODUCT BUTTON ADD TO CART */}
            <div className="product-buttons">
              <div className="product-button">Add to Cart</div>
              <div className="product-button">
                <IoMdHeartEmpty className="icon" />
              </div>
              <div className="product-button">
                <GoStack className="icon" />
              </div>
            </div>

            {/* PRODUCT ACCEPT WITH TERMS & CONDITIONS */}
            <div className="product-checkbox">
              <input
                type="checkbox"
                id="acceptTermsAndConditions"
                checked={termsAccepted}
                onChange={handleTermsChange}
              />
              <label htmlFor="acceptTermsAndConditions">
                I agree with <Link to="#!">Terms & Conditions</Link>
              </label>
            </div>

            {/* PRODUCT BUTTON BUY */}
            <div className="product-buttons-buy">
              <div className={`product-button ${!termsAccepted ? 'disabled' : ''}`}>
                Buy with Paypal
              </div>
              <div className={`product-button ${!termsAccepted ? 'disabled' : ''}`}>
                More payment options
              </div>
            </div>

            {/* PRODUCT DELIVERY RETURN */}
            <div className="product-delivery-return">
              <div className="product-delivery">
                <TbTruckDelivery className="icon" />
                <p>
                  Estimate delivery times: <span>3-6 days</span> (International).
                </p>
              </div>

              <div className="product-return">
                <LuRecycle className="icon" />
                <p>
                  Return within <span>45 days</span> of purchase. Duties & taxes are non-refundable.
                </p>
              </div>
            </div>

            {/* PRODUCT META */}
            <div className="product-meta">
              <ul>
                <li>Sku: </li>
                <li>Available:</li>
                <li>Vendor:</li>
              </ul>

              <ul>
                <li>N/A</li>
                <li>Instock</li>
                <li>
                  <Link to="#!">NotaG</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;

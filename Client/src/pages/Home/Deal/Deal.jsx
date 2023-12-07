import { Link } from 'react-router-dom';

import './Deal.scss';

function Deal() {
  const deals = [
    {
      link: '#!',
      image: '../images/deal-item-1.jpg',
      title: 'Cyber Monday - Save $599 On Speaker',
      desc: 'Save 50% on order more than $99. Delivery in 1 days. Apply for the first 1k Customers.',
    },
    {
      link: '#!',
      image: '../images/deal-item-2.jpg',
      title: 'Unbeatable Offer - Buy 1, Get 2 Free!',
      desc: 'Save 80% on order more than $599. Delivery in 1 days. Apply for the first 1k Customers.',
    },
    {
      link: '#!',
      image: '../images/deal-item-3.jpg',
      title: 'Hurry up, Smartphone On Sale for $299',
      desc: 'All smartphone products at the same price $299. Delivery in 1 days. Apply for the first 1k Customers.',
    },
  ];

  return (
    <div className="deal-wrapper">
      <div className="deal-container content">
        {/* DEAL HEADING */}
        <div className="trending-heading">
          <h3 className="primaryText">Deals & Promotions</h3>
        </div>

        {/* DEAL CONTENT */}
        <div className="deal-content">
          {deals.map((deal, index) => (
            <div className="deal-item" key={index}>
              <Link to={deal.link}>
                <img src={deal.image} alt={deal.title} />
              </Link>
              <div className="deal-info">
                <h3 className="deal-title">
                  <Link to={deal.link}>{deal.title}</Link>
                </h3>
                <p className="deal-desc">{deal.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deal;

import React from 'react';
import { FaCheck, FaCrown, FaStar } from 'react-icons/fa';
import './TierCard.css';

export default function TierCard({ tier }) {
  const getCardIcon = () => {
    if (tier.type === 'founding-partner') return <FaCrown />;
    if (tier.highlight) return <FaStar />;
    return null;
  };

  return (
    <div
      className={`tier-card ${tier.highlight ? 'tier-card-highlight' : ''} ${
        tier.type === 'founding-partner' ? 'founding-partner-card' : ''
      }`}
    >
      {tier.badgeText && (
        <div className='tier-badge'>
          {getCardIcon()}
          {tier.badgeText}
        </div>
      )}

      <div className='tier-header'>
        <h3 className='tier-title'>{tier.title}</h3>
        <p className='tier-subtitle'>{tier.subtitle}</p>
      </div>

      <div className='tier-price'>
        <span className='price-text'>{tier.price}</span>
      </div>

      {tier.description && (
        <p className='tier-description'>{tier.description}</p>
      )}

      <div className='tier-features'>
        {tier.features.map((feature, index) => (
          <div key={index} className='feature-item'>
            <FaCheck className='feature-check' />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {tier.type === 'founding-partner' && (
        <button className='tier-button founding-partner-button'>
          Claim Your Spot
        </button>
      )}

      {tier.type === 'tier' && tier.price !== 'Free' && (
        <button className='tier-button'>Choose Plan</button>
      )}

      {tier.price === 'Free' && (
        <button className='tier-button free-button'>Get Started</button>
      )}
    </div>
  );
}

import React from 'react';
import Header from '../components/Header/Header';
import TierCard from '../components/TierCard/TierCard';
import './Founders.css';

const businessTiers = [
  {
    id: 'founding-partner',
    type: 'founding-partner',
    title: 'FOUNDING PARTNER',
    subtitle: 'Limited Time Offer',
    features: [
      'Lifetime Tier 2 upgrade (normally $39/mo)',
      'Permanent "Founding Partner" badge',
      'Priority placement in feeds & search',
      'Early collaboration access',
      'Co-marketing exposure',
      'Free early analytics',
      'Launch PR spotlight',
    ],
    price: 'One-time Investment',
    highlight: true,
    badgeText: 'Only 25 Slots Available',
    description:
      'Secure your place as a founding partner and enjoy lifetime benefits that will never be offered again.',
  },
  {
    id: 'tier-1',
    type: 'tier',
    title: 'TIER 1',
    subtitle: 'Base Free',
    features: [
      '2 posts/month',
      '1–2 interests',
      'RSVP counts only',
      'Basic profile features',
      'Community access',
    ],
    price: 'Free',
    highlight: false,
  },
  {
    id: 'tier-2',
    type: 'tier',
    title: 'TIER 2',
    subtitle: 'Growth Plan',
    features: [
      '5 posts/month',
      '1–2 categories',
      'Priority feed/search',
      'Basic analytics',
      '7-day ads',
      'Enhanced profile',
    ],
    price: '$39/mo',
    highlight: false,
  },
  {
    id: 'tier-3',
    type: 'tier',
    title: 'TIER 3',
    subtitle: 'Landmark Status',
    features: [
      'Unlimited posts',
      'Map Legend Marker',
      'Premium placement',
      'Advanced features',
      'Priority support',
    ],
    price: '$149/mo',
    highlight: false,
    badgeText: 'Limited Slots',
  },
  // {
  //   id: 'tier-4',
  //   type: 'tier',
  //   title: 'TIER 4',
  //   subtitle: 'Enterprise Solution',
  //   features: [
  //     'Sponsored categories/events',
  //     'Unlimited perks',
  //     'CRM/API integrations',
  //     'Featured Explore/Hot placement',
  //     'Advanced analytics + heatmap',
  //     '14-day ads',
  //     'Quarterly strategy sessions',
  //     'Unlimited ad runs',
  //   ],
  //   price: '$499+',
  //   highlight: false,
  // },
];

export default function Founders() {
  return (
    <div className='founders-container'>
      <Header />
      <div className='founders-content'>
        <div className='founders-hero'>
          <h1 className='founders-title'>Become a Founding Partner</h1>
          <p className='founders-subtitle'>
            Join Social Circle as a Founding Partner and secure lifetime
            benefits that will never be offered again. Only 25 spots available
            in Denver.
          </p>
        </div>

        <div className='tiers-grid'>
          {businessTiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className='founders-cta'>
          <div className='cta-card'>
            <h2>Ready to Claim Your Spot?</h2>
            <p>
              Once these 25 Founding Partner slots are filled, this opportunity
              will never be offered again.
            </p>
            <button className='cta-button'>
              Claim Your Founding Partner Spot
            </button>
            <p className='cta-note'>socialcircle.com/founders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

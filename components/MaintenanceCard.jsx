'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from './global/Card';

const MaintenanceCard = ({ variant, title, price, description, features }) => {
  return (
    <Card
      variant={variant}
      className={`text-neutral-950/80 ${variant === 'silver' && 'ring-4 ring-cyan-600 mb-[4px]'}`}
    >
      <h3 className="text-3xl font-sfHeavy">{title}</h3>
      <h4 className="price flex flex-row items-center justify-center my-8">
        <sup className="dollar text-3xl">$</sup>
        <span className="cost text-7xl">{price}</span>
        <sub className="month text-3xl">/month</sub>
      </h4>
      <p className="my-2">{description}</p>
      <ul className="uk-list mt-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm flex flex-row items-center my-1">
            {feature.icon && <feature.icon className="size-4 mr-2" />}
            {feature.label}
          </li>
        ))}
      </ul>
    </Card>
  );
};

MaintenanceCard.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
};

export default MaintenanceCard;

import React from 'react';

const IceCreamItem = ({brand, flavor, rating, store}) => {
  return (
    <li>
        <div>{brand} - {flavor}</div>
        <div>Arvostelu: {rating}</div>
        <div>Saatavilla: {store}</div>
    </li>
  );
};

export default IceCreamItem;
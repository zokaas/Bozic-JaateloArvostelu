import React from 'react';
import IceCreamItem from './IceCreamItem';

const IceCreamList = ({ iceCreams }) => {
  return (
    <ul>
      {iceCreams.map((iceCream, index) => (
        <IceCreamItem key={index} name={iceCream.brand} flavor={iceCream.flavor} rating={iceCream.rating} store={iceCream.store}/>
      ))}
    </ul>
  );
};

export default IceCreamList;

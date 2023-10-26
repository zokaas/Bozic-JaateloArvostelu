import React, { useState } from 'react';
import Home from './components/Home';
import IceCreamForm from './components/IceCreamForm';
import IceCreamList from './components/IceCreamList';
import './styles.css';

const App = () => {
  const [iceCreams, setIceCreams] = useState([]);

  const addIceCream = (iceCream) => {
    setIceCreams([...iceCreams, iceCream]);
  };

  return (
    <div className="app">
      <Home />
      <IceCreamForm addIceCream={addIceCream} />
      <IceCreamList iceCreams={iceCreams} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const IceCreamForm = ({ addIceCream }) => {
    const [brand, setBrand] = useState('');
    const [flavor, setFlavor] = useState('');
    const [rating, setRating] = useState('');
    const [store, setStore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addIceCream({brand, flavor, rating, store});
        setBrand('');
        setFlavor('');
        setRating('');
        setStore('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Brändi: <br/>
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </label>
        <label>
            Maku: <br/>
            <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
        </label>
        <label>
            Arvostelu (1-5): <br/>
            <input type="number"  min="1" max="5"value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
        <label>
            Kauppa: <br/>
            <input type="text" value={store} onChange={(e) => setStore(e.target.value)} />
        </label>
        <br />
        <button type="submit">Lisää arvostelu</button>
        </form>
    );
};

export default IceCreamForm;

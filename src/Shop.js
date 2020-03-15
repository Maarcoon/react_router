import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://swapi.co/api/people/'
    );

    const itemsObject = await data.json();
    console.log(itemsObject.results);
    console.log(itemsObject.results[0].url.split('/'));
    setItems(itemsObject.results);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.name}>
          <Link to={`/shop/${item.url.split('/')[5]}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;

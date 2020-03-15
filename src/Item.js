import React, { useState, useEffect } from 'react'

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const itemObject = await fetchItem.json();
    console.log(itemObject);
    setItem(itemObject);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt='' />
    </div>
  )
}

export default Item;

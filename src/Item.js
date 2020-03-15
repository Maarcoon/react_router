import React, { useState, useEffect } from 'react'

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://swapi.co/api/people/${match.params.id}`
    );
    const itemObject = await fetchItem.json();
    console.log(itemObject);
    setItem(itemObject);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>height: {item.height}</h2>
      <h2>mass: {item.mass}</h2>
      <h2>hair_color: {item.hair_color}</h2>
      <h2>skin_color: {item.skin_color}</h2>
      <h2>eye_color: {item.eye_color}</h2>
      <h2>birth_year: {item.birth_year}</h2>
      <h2>gender: {item.gender}</h2>
    </div>
  )
}

export default Item;

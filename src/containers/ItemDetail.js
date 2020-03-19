import React, { useState, useEffect } from "react";

import { Loading } from "./shared/Loading";

const getFetch = query => {
  return fetch(query).then(response => response.json());
};

function ItemDetail({ itemId }) {
  useEffect(() => {
    getFetch(`https://swapi.co/api/people/${itemId}`).then(jsonResult => {
      setItem(jsonResult);
    });
  }, []);

  const [item, setItem] = useState(null);

  if (!item) {
    return <Loading />;
  }

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
  );
}

export { ItemDetail };

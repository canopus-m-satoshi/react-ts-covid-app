import React from 'react';
import countriesJson from '../countries.json';

const Selector = () => {
  const countries = countriesJson;

  return (
    <div>
      <p>Selector</p>
      <select name="" id="">
        {countries.map((country, index) => (
          <option value={country.Slug} key={index}>
            {index} : {country.Slug}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

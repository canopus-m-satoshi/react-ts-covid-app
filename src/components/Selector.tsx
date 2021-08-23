import React from 'react';
import { useState } from 'react';
import countriesJson from '../countries.json';

import axios from 'axios';

const Selector = () => {
  const countries = countriesJson;
  const [country, setCountry] = useState('');
  const getCountryData = () => {
    axios
      .get(`https://api.covid19api.com/country/${country}`)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <p>Selector</p>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select A Country</option>
        {countries.map((country, index) => (
          <option value={country.Slug} key={index}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;

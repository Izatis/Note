import React from 'react';
import './MySelect.css'
import smile from '../../assets/smile.png'

const MySelect = ({ options, value, onChange }) => {
  return (
    <select value={value}
    onChange={event => onChange(event.target.value)}>
      <option disabled value="value1">fdgsz</option>
      {options.map(option =>
        <option key={option.id} value={option.id}>
          {option.symbol}        
          </option>
      )}

    </select>
  );
};

export default MySelect;
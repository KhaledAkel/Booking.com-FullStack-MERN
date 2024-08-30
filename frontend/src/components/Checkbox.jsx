import React from 'react';

function Checkbox({ name, selectedFilters, handleCheckboxChange, type }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={selectedFilters[name]}
        onChange={handleCheckboxChange}
        value={name}
      />
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </label>
  );
}

export default Checkbox;

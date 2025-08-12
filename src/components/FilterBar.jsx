
import React from 'react';
import RemoveIcon from './RemoveIcon';
import './FilterBar.css';

const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-tags">
        {filters.map((filter, index) => (
          <div key={index} className="filter-tag">
            <span className="filter-text">{filter}</span>
            <button 
              className="remove-btn" 
              onClick={() => removeFilter(filter)}
              aria-label={`Remove ${filter} filter`}
            >
              <RemoveIcon />
            </button>
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
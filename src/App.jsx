
import React, { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobListings from './components/JobListings';
import jobsData from './data/jobsData';
import './App.css';

function App() {
  const [filters, setFilters] = useState([]);
  const [jobs] = useState(jobsData); 

  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };


  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter(filter => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  
  const filteredJobs = filters.length === 0 
    ? jobs 
    : jobs.filter(job => {
        const jobTags = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools
        ];
        return filters.every(filter => jobTags.includes(filter));
      });

  return (
    <div className="app">
      <Header />
      <main className="container">
        {filters.length > 0 && (
          <FilterBar 
            filters={filters} 
            removeFilter={removeFilter} 
            clearFilters={clearFilters} 
          />
        )}
        <JobListings jobs={filteredJobs} addFilter={addFilter} />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import JobCard from './JobCard';
import './JobListings.css';

const Joblistings = ({ jobs, addFilter }) => {
  return (
    <div className="job-listings">
      {jobs.map(job => (
        <JobCard 
          key={job.id} 
          job={job} 
          addFilter={addFilter} 
        />
      ))}
    </div>
  );
};

export default Joblistings;

import React from 'react';
import './JobCard.css';

const JobCard = ({ job, addFilter }) => {
  const {
    company,
    logo,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools
  } = job;

  const jobTags = [role, level, ...languages, ...tools];

  return (
    <div className={`job-card ${isFeatured ? 'featured' : ''}`}>
      <div className="job-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="job-details">
        <div className="company-info">
          <span className="company-name">{company}</span>
          {isNew && <span className="new-badge">NEW!</span>}
          {isFeatured && <span className="featured-badge">FEATURED</span>}
        </div>
        <h2 className="position">{position}</h2>
        <div className="job-meta">
          <span>{postedAt}</span>
          <span className="separator">•</span>
          <span>{contract}</span>
          <span className="separator">•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="job-tags">
        {jobTags.map((tag, index) => (
          <button 
            key={index} 
            className="tag" 
            onClick={() => addFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
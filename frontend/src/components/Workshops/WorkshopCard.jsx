import React from 'react';
import './WorkshopCard.css';

const WorkshopCard = ({ title, date, instructor, description, type }) => {
  return (
    <div className="workshop-card">
      <div className="card-header">
        <span className={`badge ${type.toLowerCase()}`}>{type}</span>
        <span className="date">{date}</span>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p className="instructor">by {instructor}</p>
        <p className="description">{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn-secondary">View Details</button>
        <button className="btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default WorkshopCard;

import React from 'react';

function Card({ food }) {
  return (
    <div className="card">
      <div>
        <img
          src={`images/${food.alt}.jpg`}
          alt={food.alt[0].toUpperCase() + food.alt.substring(1)}
          className="h-32 w-full object-cover sm:h-48"
        />
      </div>
      <div className="m-4">
        <span className="font-bold">{food.title}</span>
        <span className="block text-sm text-gray-500">Recipe by {food.author}</span>
      </div>
      <div className="badge">
        <svg
          className="inline-block w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>{food.time}</span>
      </div>
    </div>
  );
}

export default Card;

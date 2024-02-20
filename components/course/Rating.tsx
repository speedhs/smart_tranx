import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const ratingNumber = parseFloat(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className="text-yellow-500">
        {i <= ratingNumber ? <FaStar /> : <FaRegStar />}
      </span>
    );
  }

  return <div className='flex flex-row '>{stars}</div>;
};

export default StarRating;

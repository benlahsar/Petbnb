import { Star } from 'lucide-react';

function StarRating({ rating }) {
  const totalStars = 5;
  
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const isFilled = index + 1 <= Math.round(rating);
        return (
          <Star 
            key={index} 
            className={`w-5 h-5 ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        );
      })}
      <span className="ml-2 text-sm text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

export default StarRating;

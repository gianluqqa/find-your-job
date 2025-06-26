import React from "react";
import { ITip } from "src/interfaces/ITip";

const TipCard: React.FC<ITip & { isReversed?: boolean }> = ({ image, title, description, isReversed = false }) => {
  return (
    <div className="bg-gray-100 relative">
      <div className={`flex flex-col sm:flex-row h-full ${isReversed ? 'sm:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-auto flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Media línea separadora */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gray-200"></div>
    </div>
  );
};

export default TipCard;
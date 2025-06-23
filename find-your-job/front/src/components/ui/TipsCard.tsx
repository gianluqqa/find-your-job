import React from "react";

interface TipCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const TipCard: React.FC<TipCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-emerald-500/50">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-4 rounded-lg bg-slate-700/50 p-2"
      />
      <h2 className="text-xl font-semibold text-emerald-400 mb-3">
        {title}
      </h2>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TipCard;
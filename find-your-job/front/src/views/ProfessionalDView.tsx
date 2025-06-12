import React from 'react';
import { TipsArray } from 'src/helpers/TipsArray';

const ProfessionalDView = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-green-900 text-center mb-10">Professional Development Tips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TipsArray.map((tip) => (
          <div key={tip.id} className="bg-green-50 border border-green-200 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-green-800 mb-2">{tip.title}</h2>
            <p className="text-green-700 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalDView;

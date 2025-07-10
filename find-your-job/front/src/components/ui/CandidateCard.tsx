import React from 'react';
import candidateArray from 'src/helpers/candidateArray';

const CandidateCard = () => {
  return (
    <div className="space-y-3 p-4">
      {candidateArray.map((candidate) => (
        <div key={candidate.id} className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center p-4">
            <div className="flex-shrink-0">
              <img 
                src={candidate.image || '/images/default.jpg'} 
                alt={candidate.name}
                className="w-16 h-16 rounded-sm object-cover border-2 border-slate-600"
              />
            </div>
            
            <div className="ml-4 flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-slate-100 truncate">{candidate.name}</h1>
                  <p className="text-sm text-slate-300 truncate">{candidate.email}</p>
                  <div className="text-xs text-slate-400 mt-1">
                    <span>{candidate.city}, {candidate.state}</span>
                    <span className="mx-2">•</span>
                    <span>{candidate.country}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{candidate.phone}</p>
                </div>
                
                <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
                  <button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                    <a href={candidate.resume?.url} target="_blank" rel="noopener noreferrer" className="block">
                      See Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateCard;
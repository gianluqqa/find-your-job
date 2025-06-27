import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 flex items-center justify-center px-4">
      <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-slate-200 text-base sm:text-lg font-medium text-center">Loading profile...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
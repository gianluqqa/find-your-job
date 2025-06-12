import React from "react";
import { AdsArray } from "src/helpers/AdsArray";

const AdsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-8">
      {AdsArray.map((ad) => (
        <div
          key={ad.id}
          className="bg-green-800 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200"
        >
          <h2 className="text-xl font-semibold mb-2">
            {ad.company} just posted {ad.vacancies} new job
            {ad.vacancies > 1 ? "s" : ""}!
          </h2>
          <p className="text-green-100 mb-1">
            📍 Location: <span className="font-medium">{ad.location}</span>
          </p>
          <p className="text-green-100 mb-2">
            🗓️ Posted on:{" "}
            <span className="font-medium">
              {new Date(ad.date).toLocaleDateString()}
            </span>
          </p>
          <div>
            <p className="font-semibold mb-1">Highlighted positions:</p>
            <ul className="list-disc list-inside text-green-200 text-sm space-y-1">
              {ad.jobTitles.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdsCard;

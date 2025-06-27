import React from "react";
import { TipsArray } from "src/helpers/tipsArray";
import TipCard from "src/components/ui/TipsCard";

const ProfessionalDView = () => {
  return (
    <section
      id="professionaldev"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-[120vh] pt-32 pb-20 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400 text-center mb-4">
          Professional Development Tips
        </h1>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of professionals working at the world's most innovative
          companies
        </p>
        <div className="flex flex-col w-full">
          {TipsArray.map((tip, index) => (
            <TipCard
              key={tip.id}
              id={tip.id.toString()} 
              image={tip.image}
              title={tip.title}
              description={tip.description}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDView;
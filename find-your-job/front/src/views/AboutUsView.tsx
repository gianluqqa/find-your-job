import React from "react";
import { Heart, Users, Target } from "lucide-react";

const AboutUsView = () => {
  return (
    <section
      id="aboutus"
      className="relative py-20 bg-gradient-to-br from-stone-50  to-emerald-800"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal-400/10 rounded-full blur-lg"></div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200/50 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-emerald-700 font-medium text-sm">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent mb-4">
            Built by Job Seekers, for Job Seekers
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/50 shadow-xl hover:shadow-emerald-500/10 transition-all duration-500">
          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            FINDyourJOB was born from frustration—endless job portals,
            repetitive forms, and no clear feedback. As a Full Stack Developer
            who spent over a year job hunting, I wanted something simple: upload
            your CV, get direct responses, and receive honest feedback.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            This platform respects your time and effort. We simplify
            applications, reduce anxiety, and provide clarity at every
            step—because everyone deserves to be seen.
          </p>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl text-center">
            <p className="font-semibold text-lg">
              Everyone deserves a chance to be seen—and FINDyourJOB is here to
              make that happen.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "Passion",
              desc: "Built with genuine care for job seekers",
            },
            {
              icon: Users,
              title: "Community",
              desc: "By developers, for the tech community",
            },
            {
              icon: Target,
              title: "Purpose",
              desc: "Clear, honest, and respectful process",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsView;

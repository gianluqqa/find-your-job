"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProfessionalDPreview.module.css";
import Button1 from "src/components/ui/Button1";

const ProfessionalDPreview = () => {
  return (
    <section
      id="professionaldpreview"
      className="relative w-full px-6 py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 min-h-screen flex items-center"
    >
      {/* Fondo decorativo */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-600/20 to-slate-700/15 rounded-full blur-3xl ${styles.animateDrift}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-600/15 to-teal-700/20 rounded-full blur-3xl ${styles.animateDriftReverse}`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-slate-600/10 to-teal-600/15 rounded-full blur-2xl ${styles.animateSubtlePulse}`}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto p-8 md:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Contenido de texto */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h2
                  className={`text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-slate-200 leading-tight ${styles.animateFadeIn}`}
                >
                  Professional Development
                </h2>
                <div
                  className={`mt-6 w-32 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-slate-400 rounded-full ${styles.animateExpand}`}
                ></div>
              </div>

              <div className="space-y-6">
                <p
                  className={`text-teal-100 text-xl lg:text-2xl leading-relaxed font-medium ${styles.animateSlideUp}`}
                >
                  Discover resources, courses, and personalized tools designed
                  to help you grow in your professional career.
                </p>
                <p
                  className={`text-slate-300 text-lg lg:text-xl leading-relaxed ${styles.animateSlideUpDelayed}`}
                >
                  This section focuses on enhancing your skillset, expanding
                  your network, and preparing you for real-world challenges in
                  the job market...
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button1 className="rounded-lg" href="/professionaldev">
                Go to Professional Development
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button1>
            </div>
          </div>

          {/* Imagen con efectos */}
          <div className="flex-shrink-0 relative group/image">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-2xl blur-xl scale-105 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/60 to-teal-900/40 p-4 rounded-2xl shadow-xl border border-teal-700/30 group-hover/image:border-teal-600/50 transition-all duration-300 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/DesarrolloP1.png"
                    alt="Professional development illustration"
                    width={450}
                    height={320}
                    className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-800/10 to-emerald-800/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full ${styles.animateGentlePulse} opacity-60`}
              ></div>
              <div
                className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-slate-400 rounded-full ${styles.animateGentlePulseDelayed} opacity-50`}
              ></div>
            </div>
          </div>
        </div>

        {/* Puntos decorativos */}
        <div
          className={`absolute top-8 right-8 w-2 h-2 bg-teal-400/50 rounded-full ${styles.animateGentlePulse}`}
        ></div>
        <div
          className={`absolute bottom-8 left-8 w-2 h-2 bg-emerald-400/50 rounded-full ${styles.animateGentlePulseDelayed}`}
        ></div>
      </div>
    </section>
  );
};

export default ProfessionalDPreview;

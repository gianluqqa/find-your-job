import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfessionalDPreview = () => {
  return (
    <section
      id="professionaldpreview"
      className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto border border-green-800 flex flex-col md:flex-row items-center gap-6"
    >
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-green-900 mb-3">
          Professional Development
        </h2>
        <p className="text-green-800 text-base leading-relaxed mb-5">
          Discover resources, courses, and personalized tools designed to help
          you grow in your professional career. This section focuses on
          enhancing your skillset, expanding your network, and preparing you for
          real-world challenges in the job market. Whether you're just starting
          out or looking to take the next big step, our curated content will
          guide your journey with purpose and strategy.
        </p>
        <Link
          href="/professionaldev"
          className="inline-block bg-green-900 text-white px-5 py-2.5 rounded-lg hover:bg-green-800 transition"
        >
          Go to Professional Development
        </Link>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/DesarrolloP1.png" // asegúrate de tener esta imagen en /public/images/
          alt="Professional development illustration"
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default ProfessionalDPreview;

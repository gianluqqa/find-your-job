import Link from "next/link";

const Button2: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className="group relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-600/50 hover:border-emerald-400/70 rounded-lg px-6 py-2.5 text-sm font-medium text-slate-200 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105">
        {/* Gradiente de fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/80 via-blue-800/80 to-slate-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Línea de brillo sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        {/* Contenido del botón */}
        <span className="relative z-10 tracking-wide">
          {children}
        </span>
      </button>
    </Link>
  );
};

export default Button2;
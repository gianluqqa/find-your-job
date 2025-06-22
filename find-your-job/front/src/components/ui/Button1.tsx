import Link from 'next/link'

interface Button1Props {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  isVisible?: boolean
  showArrow?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button1 = ({ 
  children,
  href,
  onClick,
  isVisible = true,
  showArrow = true,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: Button1Props) => {
  
  // Estilos base
  const baseStyles = "group inline-flex items-center gap-3 rounded-2xl transition-all duration-300 font-semibold shadow-xl transform active:scale-95"
  
  // Variantes de colores
  const variants = {
    primary: "bg-gradient-to-r from-emerald-700 to-emerald-800 text-white hover:from-emerald-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/25",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 hover:shadow-2xl hover:shadow-gray-500/25",
    outline: "bg-transparent border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white hover:shadow-2xl hover:shadow-emerald-500/25"
  }
  
  // Tamaños
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl"
  }
  
  // Estilos de visibilidad/animación
  const visibilityStyles = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-4'
  
  // Estilos de hover
  const hoverStyles = disabled 
    ? 'cursor-not-allowed opacity-50' 
    : 'hover:scale-105'
  
  // Combinar todas las clases
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${visibilityStyles} ${hoverStyles} transition-all duration-1000 delay-700 ${className}`
  
  // Icono de flecha
  const ArrowIcon = () => showArrow ? (
    <svg 
      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ) : null
  
  // Si tiene href, renderizar como Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
        <ArrowIcon />
      </Link>
    )
  }
  
  // Renderizar como botón normal
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
      <ArrowIcon />
    </button>
  )
}

export default Button1
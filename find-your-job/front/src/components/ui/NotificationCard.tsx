interface NotificationCardProps {
  title: string
  subtitle?: string
  isVisible?: boolean
  showIndicator?: boolean
  indicatorColor?: 'emerald' | 'blue' | 'red' | 'yellow' | 'purple'
  variant?: 'floating' | 'inline' | 'fixed'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  delay?: number
  className?: string
  onClose?: () => void
  showCloseButton?: boolean
}

const NotificationCard = ({ 
  title,
  subtitle,
  isVisible = true,
  showIndicator = true,
  indicatorColor = 'emerald',
  variant = 'floating',
  position = 'bottom-left',
  delay = 1000,
  className = '',
  onClose,
  showCloseButton = false
}: NotificationCardProps) => {
  
  // Colores del indicador
  const indicatorColors = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500'
  }
  
  // Posiciones para floating
  const positions = {
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
    'bottom-right': '-bottom-8 -right-8'
  }
  
  // Variantes de estilo
  const variants = {
    floating: 'absolute shadow-xl',
    inline: 'relative shadow-lg',
    fixed: 'fixed shadow-2xl z-50'
  }
  
  // Estilos base
  const baseStyles = "bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100/50 transition-all duration-1000"
  
  // Estilos de visibilidad
  const visibilityStyles = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-4'
  
  // Combinar clases según la variante
  const getPositionClasses = () => {
    if (variant === 'floating') return positions[position]
    if (variant === 'fixed') {
      switch (position) {
        case 'top-left': return 'top-4 left-4'
        case 'top-right': return 'top-4 right-4'
        case 'bottom-left': return 'bottom-4 left-4'
        case 'bottom-right': return 'bottom-4 right-4'
        default: return 'bottom-4 right-4'
      }
    }
    return ''
  }
  
  const cardClasses = `${baseStyles} ${variants[variant]} ${getPositionClasses()} ${visibilityStyles} ${className}`
  
  return (
    <div 
      className={cardClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          {showIndicator && (
            <div className={`w-3 h-3 ${indicatorColors[indicatorColor]} rounded-full animate-pulse`}></div>
          )}
          <div className="text-sm font-medium text-slate-700">
            {title}
          </div>
        </div>
        
        {showCloseButton && onClose && (
          <button 
            onClick={onClose}
            className="ml-2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {subtitle && (
        <div className="text-xs text-slate-500 mt-1">
          {subtitle}
        </div>
      )}
    </div>
  )
}

export default NotificationCard
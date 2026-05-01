function Button({ children, variant = 'primary', size = 'md', onClick, href, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-body font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-cyan text-bg hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] active:scale-95',
    outline:
      'border border-cyan text-cyan hover:bg-cyan hover:text-bg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-95',
    amber:
      'bg-amber text-bg hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,179,71,0.5)] active:scale-95',
    ghost:
      'text-[#5a6e9a] hover:text-cyan hover:scale-105 active:scale-95',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
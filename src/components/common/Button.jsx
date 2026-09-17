function Button({ children, variant = 'primary', className = '', type = 'button', onClick, ...props }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

export default function SectionTemplate({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
  containerClassName = "max-w-6xl mx-auto px-6",
  titleClassName = "",
  subtitleClassName = ""
}) {
  return (
    <section 
      id={id} 
      className={`py-16 dark:bg-gray-900 transition-colors duration-300 ${className}`}
    >
      <div className={containerClassName}>
        {title && (
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 ${titleClassName}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

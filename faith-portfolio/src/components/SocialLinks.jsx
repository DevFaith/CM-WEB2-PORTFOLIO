export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex space-x-6 ${className}`}>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"> {/* GitHub SVG */} </svg>
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"> {/* X SVG */} </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"> {/* LinkedIn SVG */} </svg>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"> {/* Instagram SVG */} </svg>
      </a>
    </div>
  );
}
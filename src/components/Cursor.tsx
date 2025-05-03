import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Only show custom cursor on desktop
      if (window.innerWidth > 768) {
        setHidden(false);
      }
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);
    
    const addHoverToLinks = () => {
      const allLinks = document.querySelectorAll('a, button');
      allLinks.forEach(el => {
        el.addEventListener('mouseenter', handleLinkHoverOn);
        el.addEventListener('mouseleave', handleLinkHoverOff);
      });
    };
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => {
      if (window.innerWidth > 768) {
        setHidden(false);
      }
    };
    
    // Initial setup
    addHoverToLinks();
    
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Observer for dynamically added links
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          addHoverToLinks();
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      // Clean up link event listeners
      const allLinks = document.querySelectorAll('a, button');
      allLinks.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverOn);
        el.removeEventListener('mouseleave', handleLinkHoverOff);
      });
      
      observer.disconnect();
    };
  }, []);

  if (hidden || window.innerWidth <= 768) return null;

  return (
    <>
      <div 
        className={`cursor-dot fixed rounded-full pointer-events-none transition-transform z-50 ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: linkHovered ? '#6C63FF' : '#6C63FF',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          transform: `translate(-50%, -50%) ${clicked ? 'scale(0.75)' : 'scale(1)'}`,
        }}
      ></div>
      <div 
        className={`cursor-ring fixed rounded-full pointer-events-none z-40 ${linkHovered ? 'scale-150' : clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: linkHovered ? '#6C63FF' : 'rgba(108, 99, 255, 0.5)',
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease',
          transform: `translate(-50%, -50%) ${linkHovered ? 'scale(1.5)' : clicked ? 'scale(0.75)' : 'scale(1)'}`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
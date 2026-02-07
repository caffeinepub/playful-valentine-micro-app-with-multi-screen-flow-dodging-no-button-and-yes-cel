import { useState, useCallback, useRef, type CSSProperties } from 'react';

export function useDodgingNoButton(onDodge?: () => void) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getRandomPosition = useCallback(() => {
    // Define safe bounds for the button to move within
    const maxX = 200; // pixels from center
    const maxY = 100; // pixels from center
    
    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;
    
    return { x: newX, y: newY };
  }, []);

  const dodge = useCallback(() => {
    const newPos = getRandomPosition();
    setPosition(newPos);
    onDodge?.();
  }, [getRandomPosition, onDodge]);

  const handlePointerEnter = useCallback((e: React.PointerEvent) => {
    // Only dodge on hover for mouse/pen, not touch
    if (e.pointerType !== 'touch') {
      dodge();
    }
  }, [dodge]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Dodge on touch/click attempt
    e.preventDefault();
    dodge();
  }, [dodge]);

  const noButtonStyle: CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
  };

  return {
    noButtonStyle,
    handlePointerEnter,
    handlePointerDown,
    containerRef
  };
}

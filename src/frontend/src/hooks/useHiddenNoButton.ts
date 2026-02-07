import { useState, useEffect, useCallback, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseHiddenNoButtonOptions {
  onEscape: () => void;
}

const VISIBLE_DURATION = 500; // 0.5 seconds
const RELOCATION_INTERVAL = 2000; // 2 seconds
const BUTTON_SIZE = 80; // Approximate button width/height for collision detection

export function useHiddenNoButton({ onEscape }: UseHiddenNoButtonOptions) {
  const [buttonPosition, setButtonPosition] = useState<Position | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastPositionRef = useRef<Position | null>(null);

  const getRandomPosition = useCallback((): Position => {
    // Get safe bounds (accounting for button size and screen edges)
    const padding = 60;
    const maxX = window.innerWidth - padding * 2;
    const maxY = window.innerHeight - padding * 2;
    
    return {
      x: padding + Math.random() * maxX,
      y: padding + Math.random() * maxY
    };
  }, []);

  const relocateButton = useCallback(() => {
    const newPosition = getRandomPosition();
    setButtonPosition(newPosition);
    lastPositionRef.current = newPosition;
    setIsVisible(true);

    // Hide after brief visibility
    setTimeout(() => {
      setIsVisible(false);
    }, VISIBLE_DURATION);
  }, [getRandomPosition]);

  const triggerEscape = useCallback(() => {
    // Vibrate if supported
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    
    setIsVisible(false);
    onEscape();
    
    // Relocate after a short delay
    setTimeout(() => {
      relocateButton();
    }, 300);
  }, [onEscape, relocateButton]);

  const handleAreaTap = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const clickX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    const clickY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;

    // Check if tap is near last known position
    if (lastPositionRef.current) {
      const dx = clickX - lastPositionRef.current.x;
      const dy = clickY - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // If tap is within button area, trigger escape
      if (distance < BUTTON_SIZE) {
        triggerEscape();
      }
    }
  }, [triggerEscape]);

  // Initialize and set up periodic relocation
  useEffect(() => {
    // Initial position
    relocateButton();

    // Periodic relocation
    const interval = setInterval(() => {
      relocateButton();
    }, RELOCATION_INTERVAL);

    return () => clearInterval(interval);
  }, [relocateButton]);

  return {
    buttonPosition,
    isVisible,
    handleAreaTap
  };
}

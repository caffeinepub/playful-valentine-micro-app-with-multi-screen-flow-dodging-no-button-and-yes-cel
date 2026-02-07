import { useState, useEffect } from 'react';
import ValentineScreenShell from '@/components/ValentineScreenShell';
import Level1Distractions from '@/components/Level1Distractions';
import Level1Occluders from '@/components/Level1Occluders';
import { useHiddenNoButton } from '@/hooks/useHiddenNoButton';
import DodgeMessageToast from '@/components/DodgeMessageToast';

interface Level1ScreenProps {
  onComplete: () => void;
}

const MISS_MESSAGES = [
  "Nope 😜",
  "Missed it!",
  "It ran away!",
  "Try again 😂"
];

const PROGRESS_MESSAGE = "Hmm… this is harder than it looks 🤔";
const MISS_THRESHOLD = 4;
const COMPLETION_THRESHOLD = 10;

export default function Level1Screen({ onComplete }: Level1ScreenProps) {
  const [missCount, setMissCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const { buttonPosition, isVisible, handleAreaTap } = useHiddenNoButton({
    onEscape: () => {
      const newCount = missCount + 1;
      setMissCount(newCount);
      
      // Show random miss message
      const randomMessage = MISS_MESSAGES[Math.floor(Math.random() * MISS_MESSAGES.length)];
      setCurrentMessage(randomMessage);
      setShowMessage(true);
      
      // Show progress message after threshold
      if (newCount === MISS_THRESHOLD) {
        setShowProgress(true);
      }
      
      // Auto-hide message
      setTimeout(() => setShowMessage(false), 2000);
      
      // Complete level after enough attempts
      if (newCount >= COMPLETION_THRESHOLD) {
        setTimeout(() => onComplete(), 1500);
      }
    }
  });

  return (
    <ValentineScreenShell gameBackground>
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 text-center relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-valentine-primary animate-fade-in">
            Level 1: Find the NO button ❌
          </h2>
          {showProgress && (
            <p className="text-lg text-valentine-text-muted mt-2 animate-fade-in">
              {PROGRESS_MESSAGE}
            </p>
          )}
        </div>

        {/* Game area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Distractions layer */}
          <Level1Distractions />
          
          {/* Occluders layer */}
          <Level1Occluders />
          
          {/* Interactive gameplay region */}
          <div 
            className="absolute inset-0 z-10"
            onClick={handleAreaTap}
            style={{ cursor: 'pointer' }}
          >
            {/* Hidden NO button */}
            {isVisible && buttonPosition && (
              <button
                className="absolute bg-valentine-accent text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium transition-all duration-200 hover:scale-105 animate-fade-in"
                style={{
                  left: `${buttonPosition.x}px`,
                  top: `${buttonPosition.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAreaTap(e);
                }}
              >
                NO
              </button>
            )}
          </div>

          {/* Toast message */}
          {showMessage && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 animate-fade-in-out">
              <div className="bg-valentine-accent text-white px-6 py-3 rounded-full shadow-lg text-lg font-medium whitespace-nowrap">
                {currentMessage}
              </div>
            </div>
          )}
        </div>
      </div>
    </ValentineScreenShell>
  );
}

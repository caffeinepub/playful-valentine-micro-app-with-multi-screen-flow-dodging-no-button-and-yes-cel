import { useEffect, useState } from 'react';
import ValentineScreenShell from '@/components/ValentineScreenShell';
import ConfettiBurst from '@/components/ConfettiBurst';
import TeddyHugJump from '@/components/TeddyHugJump';
import OutwardHeartBurst from '@/components/OutwardHeartBurst';

interface YesCelebrationScreenProps {
  onComplete: () => void;
}

const SWEET_MESSAGES = [
  "You are absolutely beautiful 🌸",
  "I'm so grateful to have you in my life ❤️",
  "Every moment with you means everything to me",
  "Thank you for being you, Anya 🥰"
];

const FINAL_MESSAGE = "Happy Valentine's Day 💕\nI'm really lucky to be with you.";

export default function YesCelebrationScreen({ onComplete }: YesCelebrationScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    // Trigger vibration if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }

    // Show messages sequentially
    const messageTimers: NodeJS.Timeout[] = [];
    
    SWEET_MESSAGES.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(index);
      }, index * 3000);
      messageTimers.push(timer);
    });

    // Show final message
    const finalTimer = setTimeout(() => {
      setShowFinalMessage(true);
    }, SWEET_MESSAGES.length * 3000);
    messageTimers.push(finalTimer);

    // Auto-advance to ending
    const completeTimer = setTimeout(() => {
      onComplete();
    }, (SWEET_MESSAGES.length * 3000) + 4000);
    messageTimers.push(completeTimer);

    return () => {
      messageTimers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <ValentineScreenShell gameBackground>
      <ConfettiBurst />
      <OutwardHeartBurst />
      <TeddyHugJump />
      
      <div className="h-full flex items-center justify-center px-6">
        <div className="text-center space-y-8 relative z-10 max-w-2xl">
          {!showFinalMessage ? (
            <p 
              key={currentMessageIndex}
              className="text-2xl md:text-3xl text-valentine-primary font-semibold leading-relaxed animate-fade-in"
            >
              {SWEET_MESSAGES[currentMessageIndex]}
            </p>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <p className="text-2xl md:text-3xl text-valentine-accent font-bold whitespace-pre-line">
                {FINAL_MESSAGE}
              </p>
            </div>
          )}
        </div>
      </div>
    </ValentineScreenShell>
  );
}

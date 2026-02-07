import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';
import ConfettiBurst from '@/components/ConfettiBurst';
import HeartsRain from '@/components/HeartsRain';

interface YesCelebrationScreenProps {
  onContinue: () => void;
}

export default function YesCelebrationScreen({ onContinue }: YesCelebrationScreenProps) {
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Trigger vibration if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }

    // Show continue button after celebration
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ValentineScreenShell>
      <ConfettiBurst />
      <HeartsRain />
      
      <div className="text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-valentine-primary leading-tight animate-bounce-gentle">
          Best decision ever 🥰
        </h1>
        <p className="text-2xl md:text-3xl text-valentine-accent font-semibold">
          Happy Valentine's Day, Anya ❤️
        </p>
        <p className="text-xl md:text-2xl text-valentine-text mt-6">
          Dinner / chocolate / cuddles are officially planned 😏
        </p>
        
        {showContinue && (
          <Button
            onClick={onContinue}
            size="lg"
            className="mt-12 text-lg px-8 py-6 rounded-full bg-valentine-primary hover:bg-valentine-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
          >
            Continue
          </Button>
        )}
      </div>
    </ValentineScreenShell>
  );
}

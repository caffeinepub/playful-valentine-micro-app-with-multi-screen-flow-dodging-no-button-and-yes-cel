import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface FinalLevelScreenProps {
  onComplete: () => void;
}

const FAKE_BUTTONS = [
  { id: 1, label: "NO?", x: 30, y: 35 },
  { id: 2, label: "Not this one", x: 70, y: 45 },
  { id: 3, label: "Almost!", x: 50, y: 65 }
];

export default function FinalLevelScreen({ onComplete }: FinalLevelScreenProps) {
  const [visibleButtons, setVisibleButtons] = useState(FAKE_BUTTONS.map(b => b.id));

  const handleButtonClick = (id: number) => {
    setVisibleButtons(prev => prev.filter(btnId => btnId !== id));
    
    // Check if all buttons are gone
    if (visibleButtons.length === 1) {
      setTimeout(() => onComplete(), 800);
    }
  };

  return (
    <ValentineScreenShell gameBackground>
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 text-center relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold text-valentine-primary animate-fade-in">
            Final Level: Last chance 😏
          </h2>
        </div>

        {/* Game area with fake buttons */}
        <div className="flex-1 relative overflow-hidden px-6">
          {FAKE_BUTTONS.map(button => (
            visibleButtons.includes(button.id) && (
              <div
                key={button.id}
                className="absolute animate-fade-in"
                style={{
                  left: `${button.x}%`,
                  top: `${button.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Button
                  onClick={() => handleButtonClick(button.id)}
                  size="lg"
                  className="min-h-[56px] text-lg px-8 py-4 rounded-full bg-valentine-accent hover:bg-valentine-accent/90 text-white shadow-lg transition-all duration-300 animate-vanish-on-tap"
                  style={{
                    animation: visibleButtons.includes(button.id) ? 'none' : 'vanish 0.3s ease-out forwards'
                  }}
                >
                  {button.label}
                </Button>
              </div>
            )
          ))}
        </div>
      </div>
    </ValentineScreenShell>
  );
}

import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface IntroScreenProps {
  onStartGame: () => void;
}

export default function IntroScreen({ onStartGame }: IntroScreenProps) {
  return (
    <ValentineScreenShell withBottomCta gameBackground>
      {/* Main content area - centered */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-8 animate-fade-in relative w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary leading-relaxed">
            Hi Anya 💕
          </h1>
          <p className="text-xl md:text-2xl text-valentine-text">
            Welcome to a tiny game I made just for you.
          </p>
          <p className="text-lg md:text-xl text-valentine-text-muted mt-6">
            Your mission: find the NO button 😌
          </p>
        </div>
      </div>

      {/* Bottom CTA area - thumb-friendly */}
      <div className="px-6 pb-8 pt-4">
        <div className="relative w-full flex justify-center">
          <Button
            onClick={onStartGame}
            size="lg"
            className="min-h-[56px] text-lg px-10 py-4 rounded-full bg-valentine-primary hover:bg-valentine-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-button-pulse relative z-10"
          >
            🎮 Start Game
          </Button>
        </div>
      </div>
    </ValentineScreenShell>
  );
}

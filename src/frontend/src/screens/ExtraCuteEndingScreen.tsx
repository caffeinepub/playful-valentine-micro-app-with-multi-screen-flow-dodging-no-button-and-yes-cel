import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface ExtraCuteEndingScreenProps {
  onReplay: () => void;
}

export default function ExtraCuteEndingScreen({ onReplay }: ExtraCuteEndingScreenProps) {
  return (
    <ValentineScreenShell gameBackground>
      <div className="h-full flex flex-col items-center justify-center px-6 space-y-8">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Teddy with sign */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/generated/teddy-sign.dim_768x768.png"
              alt="Teddy holding sign"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-bounce-gentle"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-valentine-primary">
            Best Valentine Ever 🧸❤️
          </h1>
        </div>

        <Button
          onClick={onReplay}
          size="lg"
          className="min-h-[56px] text-lg px-10 py-4 rounded-full bg-valentine-primary hover:bg-valentine-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Replay the game 😄
        </Button>
      </div>
    </ValentineScreenShell>
  );
}

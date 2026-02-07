import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface RealQuestionScreenProps {
  onYes: () => void;
}

export default function RealQuestionScreen({ onYes }: RealQuestionScreenProps) {
  return (
    <ValentineScreenShell gameBackground>
      <div className="h-full flex flex-col items-center justify-center px-6 animate-fade-in-slow">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-valentine-primary leading-relaxed">
            Okay Anya… no more games.
          </h1>
          <p className="text-2xl md:text-3xl text-valentine-accent font-semibold">
            Will you be my Valentine? 💝
          </p>
          
          <div className="pt-8">
            <Button
              onClick={onYes}
              size="lg"
              className="min-h-[56px] text-xl px-12 py-4 rounded-full bg-valentine-success hover:bg-valentine-success-dark text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-pulse-gentle"
            >
              ✅ YES 💕
            </Button>
          </div>
        </div>
      </div>
    </ValentineScreenShell>
  );
}

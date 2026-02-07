import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface IntroScreenProps {
  onContinue: () => void;
}

export default function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <ValentineScreenShell>
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-valentine-primary leading-relaxed">
          Hi Anya 💕
        </h1>
        <p className="text-xl md:text-2xl text-valentine-text">
          I made a tiny app just to ask you something…
        </p>
        <Button
          onClick={onContinue}
          size="lg"
          className="mt-8 text-lg px-8 py-6 rounded-full bg-valentine-primary hover:bg-valentine-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Continue 👉
        </Button>
      </div>
    </ValentineScreenShell>
  );
}

import { Button } from '@/components/ui/button';
import ValentineScreenShell from '@/components/ValentineScreenShell';

interface BuildUpScreenProps {
  onReady: () => void;
}

export default function BuildUpScreen({ onReady }: BuildUpScreenProps) {
  return (
    <ValentineScreenShell>
      <div className="text-center space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-valentine-primary leading-relaxed">
          This is a very serious question.
        </h2>
        <p className="text-xl md:text-2xl text-valentine-text">
          Please answer honestly 😌
        </p>
        <Button
          onClick={onReady}
          size="lg"
          className="mt-8 text-lg px-8 py-6 rounded-full bg-valentine-primary hover:bg-valentine-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          I'm ready 👉
        </Button>
      </div>
    </ValentineScreenShell>
  );
}

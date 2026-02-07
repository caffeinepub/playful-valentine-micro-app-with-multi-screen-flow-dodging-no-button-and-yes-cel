import ValentineScreenShell from '@/components/ValentineScreenShell';

export default function SweetEndingScreen() {
  return (
    <ValentineScreenShell>
      <div className="text-center space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-valentine-primary leading-relaxed">
          I promise this app is the only thing that won't let you say no 😉
        </h2>
        <p className="text-2xl md:text-3xl text-valentine-text mt-6">
          Thank you for being you.
        </p>
        <div className="mt-12 text-6xl animate-pulse-gentle">
          💕
        </div>
      </div>
    </ValentineScreenShell>
  );
}

import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRomanticMusic } from '@/hooks/useRomanticMusic';

export default function AudioToggle() {
  const { isPlaying, toggle } = useRomanticMusic();

  return (
    <Button
      onClick={toggle}
      size="icon"
      variant="ghost"
      className="fixed top-4 right-4 z-50 rounded-full bg-white/80 hover:bg-white/90 shadow-lg backdrop-blur-sm"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 text-valentine-primary" />
      ) : (
        <VolumeX className="h-5 w-5 text-valentine-muted" />
      )}
    </Button>
  );
}

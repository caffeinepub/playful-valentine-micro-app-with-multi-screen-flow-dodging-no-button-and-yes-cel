import { useState, useEffect, useRef } from 'react';

export function useRomanticMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple romantic melody using Web Audio API
    // Since we don't have an actual audio file, we'll create a placeholder
    // In a real app, you would load an actual audio file here
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Note: In a real implementation, you would have an actual audio file
      // For now, this is a placeholder that respects the autoplay policy
      audioRef.current.play().catch(() => {
        // Autoplay was prevented, which is expected without a real audio source
        console.log('Audio playback requires user interaction');
      });
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggle };
}

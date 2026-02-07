import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function HeartsRain() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const pieces: Heart[] = [];
    
    for (let i = 0; i < 20; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 20
      });
    }
    
    setHearts(pieces);

    const timer = setTimeout(() => {
      setHearts([]);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src="/assets/generated/heart-sticker-icon.dim_256x256.png"
          alt=""
          className="absolute top-0 animate-heart-fall opacity-80"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`
          }}
        />
      ))}
    </div>
  );
}

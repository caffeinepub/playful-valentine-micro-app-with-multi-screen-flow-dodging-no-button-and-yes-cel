import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  angle: number;
  distance: number;
  size: number;
}

export default function OutwardHeartBurst() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const pieces: Heart[] = [];
    
    // Create 12 hearts bursting outward (capped for performance)
    for (let i = 0; i < 12; i++) {
      pieces.push({
        id: i,
        angle: (i * 360) / 12,
        distance: 100 + Math.random() * 50,
        size: 20 + Math.random() * 16
      });
    }
    
    setHearts(pieces);

    const timer = setTimeout(() => {
      setHearts([]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-45 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-outward-burst"
          style={{
            '--burst-angle': `${heart.angle}deg`,
            '--burst-distance': `${heart.distance}px`
          } as React.CSSProperties}
        >
          <img
            src="/assets/generated/heart-sticker-icon.dim_256x256.png"
            alt=""
            className="opacity-90"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`
            }}
          />
        </div>
      ))}
    </div>
  );
}

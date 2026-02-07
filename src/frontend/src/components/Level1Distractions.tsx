export default function Level1Distractions() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute animate-float-up"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + i}s`
          }}
        >
          <img
            src="/assets/generated/heart-sticker-icon.dim_256x256.png"
            alt=""
            className="w-8 h-8 opacity-60"
          />
        </div>
      ))}

      {/* Walking teddy */}
      <div className="absolute bottom-20 animate-teddy-walk">
        <img
          src="/assets/generated/teddy-sticker.dim_512x512.png"
          alt=""
          className="w-16 h-16"
        />
      </div>

      {/* Popping flowers */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`flower-${i}`}
          className="absolute animate-flower-pop-cycle"
          style={{
            left: `${30 + i * 25}%`,
            top: `${40 + i * 10}%`,
            animationDelay: `${i * 1.5}s`
          }}
        >
          <img
            src="/assets/generated/flower-sticker.dim_256x256.png"
            alt=""
            className="w-12 h-12"
          />
        </div>
      ))}
    </div>
  );
}

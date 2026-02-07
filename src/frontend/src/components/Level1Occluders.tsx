export default function Level1Occluders() {
  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {/* Teddy occluder */}
      <div className="absolute" style={{ left: '25%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <img
          src="/assets/generated/teddy-love-transparent.dim_512x512.png"
          alt=""
          className="w-32 h-32 opacity-80"
        />
      </div>

      {/* Flower occluder */}
      <div className="absolute" style={{ left: '75%', top: '40%', transform: 'translate(-50%, -50%)' }}>
        <img
          src="/assets/generated/flower-sticker.dim_256x256.png"
          alt=""
          className="w-24 h-24 opacity-80"
        />
      </div>

      {/* Chocolate occluder */}
      <div className="absolute" style={{ left: '50%', top: '70%', transform: 'translate(-50%, -50%)' }}>
        <img
          src="/assets/generated/chocolate-sticker.dim_256x256.png"
          alt=""
          className="w-20 h-20 opacity-80"
        />
      </div>
    </div>
  );
}

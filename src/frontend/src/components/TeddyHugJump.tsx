export default function TeddyHugJump() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
      <div className="relative animate-teddy-jump">
        <img
          src="/assets/generated/teddy-sticker.dim_512x512.png"
          alt=""
          className="w-32 h-32 md:w-40 md:h-40"
        />
        <img
          src="/assets/generated/big-heart-sticker.dim_512x512.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 animate-pulse-gentle"
        />
      </div>
    </div>
  );
}

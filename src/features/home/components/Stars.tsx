function seedRandom(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const random = seedRandom(10);

const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: Number((random() * 100).toFixed(2)),
  left: Number((random() * 100).toFixed(2)),
  size: Number((1 + random() * 2).toFixed(2)),
  delay: Number((random() * 5).toFixed(2)),
  duration: Number((2 + random() * 3).toFixed(2)),
}));

export default function Stars() {
  return (
    <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
      {stars.map((star) => (
        <span
          key={star.id}
          className='star absolute rounded-full bg-white'
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

interface ClaoudProps {
  top: string;
  size?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
}

export default function Cloud({
  top,
  size = 1,
  duration = 80,
  delay = 0,
  opacity = 0.9,
}: ClaoudProps) {
  return (
    <div
      aria-hidden='true'
      className='cloud pointer-events-none absolute left-0'
      style={{
        top,
        opacity,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className='relative'
        style={{ width: 160 * size, height: 60 * size }}
      >
        {/* Alas awan */}
        <span className='absolute bottom-0 left-0 h-[55%] w-full rounded-full bg-white' />
        {/* Gundukan kiri */}
        <span className='absolute bottom-[20%] left-[15%] h-[80%] w-[36%] rounded-full bg-white' />
        {/* Gundukan kanan (lebih besar) */}
        <span className='absolute bottom-[25%] left-[40%] h-full w-[40%] rounded-full bg-white' />
      </div>
    </div>
  );
}

const Items = ['Development', 'Branding', 'Website design', 'Game Development'];

const sequence = [...Items, ...Items];

export default function Marquee() {
  return (
    <div className='relative overflow-hidden py-10'>
      <div className='ml-[-5%] w-[110%] -rotate-2 bg-accent py-4 text-scene-top'>
        <div className='marquee-track flex w-max'>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className='flex shrink-0 items-center'
            >
              {sequence.map((items, i) => (
                <div
                  key={`${copy}-${i}`}
                  className='flex items-center font-mono text-lg font-bold uppercase tracking-wide md:text-2xl'
                >
                  <span className='px-6'>{items}</span>
                  <span aria-hidden='true'>+</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

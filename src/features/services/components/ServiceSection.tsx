import ServiceAccordion from './ServiceAccordion';

export default function ServiceSection() {
  return (
    <section className='bg-scene-bottom text-white'>
      <div className='mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28'>
        <div>
          <h2 className='text-4xl font-semibold md:text-5xl'>
            Solution
            <br />
            we provide.
          </h2>
          <p className='mt-4 max-w-sm text-white/70'>
            The combination of my passion for design, code &amp; interaction web
            design world.
          </p>
        </div>

        <ServiceAccordion />
      </div>
    </section>
  );
}

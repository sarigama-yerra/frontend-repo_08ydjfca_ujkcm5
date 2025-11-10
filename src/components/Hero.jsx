import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            New: Interactive 3D hero
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
            Components that ship fast and look great
          </h1>
          <p className="mt-4 text-white/90 text-lg leading-relaxed">
            A playful, modern collection of community-built UI blocks. Drag, drop, remix.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#components" className="rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:bg-gray-100">Browse components</a>
            <a href="#submit" className="rounded-md bg-gray-900/80 text-white px-4 py-2 text-sm font-medium border border-white/10 hover:bg-gray-900">Submit yours</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/0" />
    </section>
  );
}

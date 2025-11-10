import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Grid from './components/Grid';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />
      <Navbar />
      <Hero />
      <Grid />
      <footer className="border-t border-gray-200 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Built with love by the community</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            <a href="#terms" className="hover:text-gray-900">Terms</a>
            <a href="#changelog" className="hover:text-gray-900">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { Menu, Search, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm" />
          <span className="font-semibold tracking-tight">21st Components</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#components" className="hover:text-gray-900">Components</a>
          <a href="#templates" className="hover:text-gray-900">Templates</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-black">
            <Star className="h-4 w-4 text-amber-400" />
            Submit</button>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

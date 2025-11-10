import { useEffect, useState } from 'react';

const samples = [
  { id: 1, title: 'Navbar with Search', tags: ['header', 'navigation'] },
  { id: 2, title: 'Pricing Cards', tags: ['pricing', 'cards'] },
  { id: 3, title: 'Auth Modal', tags: ['auth', 'modal'] },
  { id: 4, title: 'CTA Section', tags: ['marketing'] },
  { id: 5, title: 'Feature List', tags: ['features'] },
  { id: 6, title: 'Dashboard Sidebar', tags: ['dashboard'] },
  { id: 7, title: 'Stats Widget', tags: ['analytics'] },
  { id: 8, title: 'Blog Card', tags: ['content'] },
  { id: 9, title: 'Footer Columns', tags: ['footer'] },
  { id: 10, title: 'FAQ Accordion', tags: ['faq'] }
];

export default function Grid() {
  const [query, setQuery] = useState('');
  const filtered = samples.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="components" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Community Components</h2>
            <p className="mt-2 text-gray-600">Explore a curated set of ready-to-use UI blocks.</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components..."
            className="w-56 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <article key={item.id} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100" />
              <div className="p-4">
                <h3 className="font-medium group-hover:underline underline-offset-2">{item.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-600">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

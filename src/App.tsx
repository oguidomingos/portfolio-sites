import { useState, useMemo } from 'react'
import { sites, categories, type Site } from './data'
import './index.css'

function SiteCard({ site, onClick }: { site: Site; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-[#1e293b] rounded-xl overflow-hidden border border-[#334155] hover:border-[#3b82f6] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="relative w-full aspect-[16/10] bg-[#0f172a] overflow-hidden">
        <iframe
          src={site.url}
          title={site.displayName}
          className="w-[1280px] h-[800px] origin-top-left border-0 pointer-events-none"
          style={{ transform: 'scale(0.25)', transformOrigin: 'top left' }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
        <div className="absolute inset-0 bg-transparent group-hover:bg-blue-500/5 transition-colors" />
      </div>
      <div className="p-4">
        <h3 className="text-[#f1f5f9] font-semibold text-sm truncate">{site.displayName}</h3>
        <p className="text-[#64748b] text-xs mt-1">{site.location}</p>
      </div>
    </div>
  )
}

function SiteModal({ site, onClose }: { site: Site; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="w-[95vw] h-[90vh] bg-[#1e293b] rounded-2xl overflow-hidden border border-[#334155] shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#334155] shrink-0">
          <div>
            <h2 className="text-[#f1f5f9] font-semibold text-lg">{site.displayName}</h2>
            <p className="text-[#64748b] text-sm">{site.location}</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors"
            >
              Open Full Site
            </a>
            <button onClick={onClose} className="p-2 text-[#94a3b8] hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={site.url}
            title={site.displayName}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [search, setSearch] = useState('')
  const [selectedSite, setSelectedSite] = useState<Site | null>(null)

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      const matchCategory = selectedCategory === 'all' || site.category === selectedCategory
      const matchSearch = search === '' ||
        site.displayName.toLowerCase().includes(search.toLowerCase()) ||
        site.location.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [selectedCategory, search])

  const activeCategories = useMemo(() => {
    return categories.filter(cat => sites.some(s => s.category === cat.id))
  }, [])

  const stats = useMemo(() => {
    const us = sites.filter(s => s.category !== 'restaurants-br').length
    const br = sites.filter(s => s.category === 'restaurants-br').length
    const cats = new Set(sites.map(s => s.category)).size
    return { total: sites.length, us, br, cats }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[#1e293b] sticky top-0 z-40 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-xl flex items-center justify-center text-white font-bold text-lg">T</div>
            <div>
              <h1 className="text-[#f1f5f9] font-bold text-xl leading-tight">Trik Digital</h1>
              <p className="text-[#64748b] text-xs">Website Portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#94a3b8]">
            <span className="hidden sm:inline"><strong className="text-[#f1f5f9]">{stats.total}</strong> sites</span>
            <span className="hidden md:inline"><strong className="text-[#f1f5f9]">{stats.cats}</strong> industries</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-3">
          {stats.total} Professional Websites
        </h2>
        <p className="text-[#94a3b8] text-lg max-w-2xl">
          Custom-built sites for small businesses across {stats.cats} industries. Each site is mobile-responsive, fast-loading, and optimized for conversions.
        </p>
        <div className="flex gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3b82f6]"></span>
            <span className="text-[#94a3b8]"><strong className="text-[#f1f5f9]">{stats.us}</strong> US businesses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
            <span className="text-[#94a3b8]"><strong className="text-[#f1f5f9]">{stats.br}</strong> BR businesses</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#1e293b] border border-[#334155] rounded-xl text-[#f1f5f9] text-sm placeholder-[#64748b] focus:outline-none focus:border-[#3b82f6] transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#1e293b] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#334155]'
            }`}
          >
            All ({sites.length})
          </button>
          {activeCategories.map(cat => {
            const count = sites.filter(s => s.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#3b82f6] text-white'
                    : 'bg-[#1e293b] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#334155]'
                }`}
              >
                {cat.icon} {cat.label} ({count})
              </button>
            )
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {filteredSites.length === 0 ? (
          <div className="text-center py-20 text-[#64748b]">
            <p className="text-lg">No sites found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSites.map(site => (
              <SiteCard key={site.name} site={site} onClick={() => setSelectedSite(site)} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-[#64748b] text-sm">
          <p>Built by <strong className="text-[#f1f5f9]">Trik Digital</strong> — AI-powered web solutions</p>
          <p className="mt-1">Each site custom-built with React, Tailwind CSS, and deployed on fast global CDN</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedSite && <SiteModal site={selectedSite} onClose={() => setSelectedSite(null)} />}
    </div>
  )
}

export default App

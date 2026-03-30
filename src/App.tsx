import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import { sites, categories, type Site } from './data'
import './index.css'

/* ── Netflix-style horizontal carousel row ── */
function CarouselRow({ title, icon, items, onSelect }: {
  title: string; icon: string; items: Site[]; onSelect: (s: Site) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="carousel-row">
      <div className="row-header">
        <span className="row-icon">{icon}</span>
        <h2 className="row-title">{title}</h2>
        <span className="row-count">{items.length}</span>
      </div>
      <div className="row-container">
        {canScrollLeft && (
          <button className="scroll-btn scroll-btn-left" onClick={() => scroll('left')} aria-label="Scroll left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
        )}
        <div className="row-scroll" ref={scrollRef}>
          {items.map(site => (
            <div key={site.name} className="card" onClick={() => onSelect(site)}>
              <div className="card-preview">
                <iframe
                  src={site.url}
                  title={site.displayName}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className="card-iframe"
                />
                <div className="card-overlay">
                  <div className="card-play">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-name">{site.displayName}</h3>
                <span className="card-location">{site.location}</span>
              </div>
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-btn scroll-btn-right" onClick={() => scroll('right')} aria-label="Scroll right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        )}
      </div>
    </div>
  )
}

/* ── Featured hero billboard (random top pick) ── */
function HeroBillboard({ site, onOpen }: { site: Site; onOpen: (s: Site) => void }) {
  return (
    <div className="hero-billboard">
      <div className="hero-iframe-wrap">
        <iframe
          src={site.url}
          title={site.displayName}
          className="hero-iframe"
          sandbox="allow-scripts allow-same-origin"
        />
        <div className="hero-gradient" />
      </div>
      <div className="hero-content">
        <span className="hero-badge">Featured</span>
        <h1 className="hero-title">{site.displayName}</h1>
        <p className="hero-location">{site.location}</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onOpen(site)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            View Site
          </button>
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Fullscreen modal ── */
function SiteModal({ site, onClose }: { site: Site; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{site.displayName}</h2>
            <span className="modal-location">{site.location}</span>
          </div>
          <div className="modal-actions">
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              Open Full Site
            </a>
            <button onClick={onClose} className="modal-close" aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
        <div className="modal-body">
          <iframe src={site.url} title={site.displayName} className="modal-iframe" />
        </div>
      </div>
    </div>
  )
}

/* ── Main App ── */
function App() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null)

  const featured = useMemo(() => {
    const good = sites.filter(s => ['site-paulista', 'site-finishing-touches', 'site-fogo-galpao', 'site-ipest-solutions', 'site-dallas-maids', 'site-custom-painting-sd'].includes(s.name))
    return good[Math.floor(Math.random() * good.length)] || sites[0]
  }, [])

  const rows = useMemo(() => {
    return categories
      .map(cat => ({
        ...cat,
        items: sites.filter(s => s.category === cat.id)
      }))
      .filter(r => r.items.length > 0)
  }, [])

  const stats = { total: sites.length, industries: rows.length }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <div className="logo-mark">T</div>
            <span className="logo-text">TRION</span>
          </div>
        </div>
        <div className="nav-center">
          <span className="nav-stat">{stats.total} Premium Sites</span>
          <span className="nav-divider" />
          <span className="nav-stat">{stats.industries} Industries</span>
        </div>
        <div className="nav-right" />
      </nav>

      {/* Hero Billboard */}
      <HeroBillboard site={featured} onOpen={setSelectedSite} />

      {/* Category Rows */}
      <div className="rows-section">
        {rows.map(row => (
          <CarouselRow
            key={row.id}
            title={row.label}
            icon={row.icon}
            items={row.items}
            onSelect={setSelectedSite}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <p>Built by <strong>Trion Marketing</strong> &mdash; AI-powered premium web solutions</p>
        <p className="footer-sub">React &middot; Tailwind CSS &middot; Global CDN</p>
      </footer>

      {/* Modal */}
      {selectedSite && <SiteModal site={selectedSite} onClose={() => setSelectedSite(null)} />}
    </div>
  )
}

export default App

import { useState, useEffect } from "react"
import { api } from "./api/client"
import Alerts from "./screens/Alerts"
import Dashboard from "./screens/Dashboard"
import Movements from "./screens/Movements"
import Products from "./screens/Products"

type View = "dashboard" | "products" | "move" | "alerts"

const views: Array<{ id: View label: string shortLabel: string icon: string }> =
  [
    {
      id: "dashboard",
      label: "Dashboard",
      shortLabel: "Dashboard",
      icon: "DB",
    },
    { id: "products", label: "Products", shortLabel: "Products", icon: "PR" },
    { id: "move", label: "Record movement", shortLabel: "Move", icon: "MV" },
    {
      id: "alerts",
      label: "Facilities & alerts",
      shortLabel: "Alerts",
      icon: "AL",
    },
  ]

const screens: Record<View, React.ComponentType> = {
  dashboard: Dashboard,
  products: Products,
  move: Movements,
  alerts: Alerts,
}

export default function App() {
  const [view, setView] = useState<View>("dashboard")
  const [alertCount, setAlertCount] = useState<number>(0)
  const [isConnected, setIsConnected] = useState<boolean>(true)

  const Screen = screens[view]
  const currentView = views.find((item) => item.id === view)!

  useEffect(() => {
    async function syncBackend() {
      try {
        const healthy = await api.checkHealth()
        setIsConnected(healthy)
        if (healthy) {
          const products = await api.getProducts()
          const lowStock = products.filter(p => p.isLowStock).length
          setAlertCount(lowStock)
        }
      } catch {
        setIsConnected(false)
      }
    }
    syncBackend()
    const timer = setInterval(syncBackend, 15000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="app-header">
        <div className="brand-lockup">
          <img src="/assets/87b33.png" alt="" className="brand-mark" />
          <div>
            <div className="brand-line">
              <strong>AUCA Stock</strong>
              <span aria-hidden="true">·</span>
              <span>{currentView.shortLabel}</span>
            </div>
            <div className="connection-status">
              <span className={isConnected ? "status-dot" : "status-dot offline"} style={{ background: isConnected ? '#10b981' : '#dc2626' }} aria-hidden="true" />
              {isConnected ? "API v1 Connected" : "Connecting to API..."}
            </div>
          </div>
        </div>
        <div className="header-actions">
          <button
            className="notification-button"
            type="button"
            aria-label={`View ${alertCount} stock alerts`}
            onClick={() => setView("alerts")}
          >
            <span aria-hidden="true">{alertCount}</span>
          </button>
          <div className="profile-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4f378a' }}>Iradukunda Fils (29853)</span>
            <img
              src="/assets/fc076.png"
              alt="Iradukunda Fils' profile"
              className="profile-image"
            />
          </div>
        </div>
      </header>

      <nav className="side-nav" aria-label="Primary navigation">
        <div className="side-brand">
          <img src="/assets/87b33.png" alt="" />
          <div>
            <strong>AUCA Stock</strong>
            <span>Inventory system</span>
          </div>
        </div>
        <div className="side-nav-items">
          {views.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id ? "nav-item is-active" : "nav-item"}
              onClick={() => setView(item.id)}
              aria-current={view === item.id ? "page" : undefined}
            >
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
              {item.id === "alerts" && (
                <span className="alert-count" aria-label={`${alertCount} alerts`}>
                  {alertCount}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="sync-card">
          <span className="status-dot" style={{ background: isConnected ? '#10b981' : '#dc2626' }} aria-hidden="true" />
          <div>
            <strong>{isConnected ? "Systems operational" : "Syncing backend..."}</strong>
            <span>{isConnected ? "Live sync active" : "Retrying :8080"}</span>
          </div>
        </div>
      </nav>

      <main id="main-content" className="app-content" tabIndex={-1}>
        <div className={`design-screen screen-${view}`}>
          <Screen />
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Primary navigation">
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            className={
              view === item.id ? "bottom-nav-item is-active" : "bottom-nav-item"
            }
            onClick={() => setView(item.id)}
            aria-current={view === item.id ? "page" : undefined}
          >
            <span className="bottom-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.shortLabel}</span>
            {item.id === "alerts" && (
              <span className="unread-dot" aria-hidden="true" />
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}

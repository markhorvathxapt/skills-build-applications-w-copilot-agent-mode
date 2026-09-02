import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink className="brand" to="/">
            <img className="brand-mark" src="/octofitapp-small.png" alt="" />
            <span>OctoFit <small>TRACKER</small></span>
          </NavLink>
          <span className="status-pill"><span /> API online</span>
        </header>
        <div className="app-layout">
          <aside className="sidebar">
            <p className="eyebrow">Your training space</p>
            <nav className="nav-stack" aria-label="Main navigation">
              <NavLink to="/" end>Overview</NavLink>
              <NavLink to="/activities">Activities</NavLink>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
              <NavLink to="/teams">Teams</NavLink>
              <NavLink to="/users">People</NavLink>
              <NavLink to="/workouts">Workouts</NavLink>
            </nav>
            <div className="sidebar-note"><strong>Keep showing up.</strong><span>Small wins stack into big progress.</span></div>
          </aside>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

function Overview() {
  return <section className="page-intro"><p className="eyebrow">Wednesday, September 02</p><h1>Move with purpose.</h1><p className="lede">Your crew is building momentum. See what happened this week and pick your next win.</p><div className="overview-grid"><div className="feature-panel"><span className="panel-kicker">Weekly focus</span><strong>Consistency over intensity</strong><span>Three active days is the goal.</span></div><div className="stat-panel"><strong>3</strong><span>activities logged</span></div><div className="stat-panel"><strong>165</strong><span>points earned</span></div></div></section>
}

export default App

import React, { useState } from 'react';
import { CircleDollarSign, RefreshCw } from 'lucide-react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MetricCards from './components/MetricCards.jsx';
import Charts from './components/Charts.jsx';
import QuickNavigation from './components/QuickNavigation.jsx';

export default function Dashboard() {
  const [active, setActive] = useState('Dashboard');
  const [range, setRange] = useState('7D');
  const [period, setPeriod] = useState('6M');
  const [menuOpen, setMenuOpen] = useState(false);
  const [refreshNote, setRefreshNote] = useState(false);
  const date = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(2026, 10, 6));

  return <div className="app-shell">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Sidebar active={active} setActive={setActive} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main className="main-content">
      <section className="welcome-card">
        <div>
          <h1>{active === 'Dashboard' ? 'Dashboard Overview' : active}</h1>
          <p>{date} <span>•</span> Welcome to Anaswara Scheme Management</p>
        </div>
        <div className="welcome-actions">
          <span className="today-rate">
            <CircleDollarSign size={13}/>
             Today's Gold: ₹13,140 / g
            </span>
             <button className="refresh" aria-label="Refresh" onClick={() => { setRefreshNote(true); setTimeout(() => setRefreshNote(false), 1800); }}>
              <RefreshCw size={16}/>
            </button>
        </div>
      </section>
      {refreshNote && <div className="refresh-note">Dashboard updated just now</div>}
      <MetricCards />
      <Charts range={range} setRange={setRange} period={period} setPeriod={setPeriod} />
      <QuickNavigation setActive={setActive} />
      <footer>© 2026 Anaswara Jewellers <span>•</span> Scheme Management</footer>
    </main>
  </div>;
}

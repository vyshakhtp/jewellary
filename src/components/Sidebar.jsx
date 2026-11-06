import React from 'react';
import { LayoutDashboard, UsersRound, ChartNoAxesColumn, TrendingUp, BookOpen, CircleDollarSign, UserRoundCog, LogOut } from 'lucide-react';

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard }, { label: 'Customers', icon: UsersRound },
  { label: 'New Joinings', icon: ChartNoAxesColumn }, { label: 'Payment Entries', icon: TrendingUp },
  { label: 'Scheme Details', icon: BookOpen }, { label: 'Gold Rate Report', icon: CircleDollarSign },
  { label: 'User management', icon: UserRoundCog },
];

export default function Sidebar({ active, setActive, menuOpen, setMenuOpen }) {
  return <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
    <nav>{navigation.map(({ label, icon: Icon }) => 
      <button key={label} onClick={() => { setActive(label); setMenuOpen(false); }} className={`nav-item ${active === label ? 'active' : ''}`}>
        <Icon size={17}/><span>{label}</span>
      </button>)}
    </nav>
    <button className="logout"><LogOut size={17}/><span>Logout</span></button>
  </aside>;
}

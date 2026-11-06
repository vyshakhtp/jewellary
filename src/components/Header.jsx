import React from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';

export default function Header({ menuOpen, setMenuOpen }) {
  return <header className="topbar">
    <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    <div className="brand">
      <div className="brand-mark">A</div>
      <div>
        <strong>Anaswara</strong><small>J E W E L L E R S</small>
      </div>
    </div>
    <div className="top-tools">
      <label className="search-box">
        <Search size={16}/>
        <input placeholder="Search schemes, customers" />
      </label>
      <button className="rate-pill">Gold Rate: ₹13140 /g</button>
      <button className="icon-button" aria-label="Notifications"><Bell size={19}/></button>
      <div className="user-info">
        <span className="avatar">A</span>
        <div>
          <small>Welcome back,</small>
          <b>admin</b>
        </div>
      </div>
    </div>
  </header>;
}

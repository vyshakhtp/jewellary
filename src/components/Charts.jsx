import React from 'react';
import { ArrowRight } from 'lucide-react';

function LineChart() {
  return <div className="chart-area line-chart">
    <div className="y-labels">
      <span>₹13,415</span>
      <span>₹13,300</span>
      <span>₹13,100</span>
      <span>₹12,900</span>
      <span>₹12,700</span>
    </div>
    <svg viewBox="0 0 700 225" preserveAspectRatio="none" role="img" aria-label="Gold rate rises to a peak before falling">
      <defs>
        <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f4a31b" stopOpacity=".30"/>
          <stop offset="100%" stopColor="#f4a31b" stopOpacity=".02"/>
        </linearGradient>
      </defs>
      {[15, 62, 109, 156, 203].map(y => <line key={y} x1="0" x2="700" y1={y} y2={y} className="grid-line" />)}
      <path d="M0,112 C35,145 55,195 104,197 S161,193 207,195 S274,181 332,180 S393,177 434,142 S490,95 537,40 S594,15 635,43 S671,78 700,88 L700,203 L0,203 Z" fill="url(#fill)" />
      <path d="M0,112 C35,145 55,195 104,197 S161,193 207,195 S274,181 332,180 S393,177 434,142 S490,95 537,40 S594,15 635,43 S671,78 700,88" className="gold-line" />
    </svg>
    <div className="x-labels">
      <span>Oct 30, 2026</span>
      <span>Oct 31, 2026</span>
      <span>Nov 1, 2026</span>
      <span>Nov 2, 2026</span>
      <span>Nov 3, 2026</span>
      <span>Nov 4, 2026</span>
      <span>Nov 5, 2026</span>
      <span>Nov 6, 2026</span>
    </div>
  </div>;
}

function BarChart() {
  const groups = [
    { m: 'Nov 26', values: [3, 2, 2] }, { m: 'Oct 26', values: [16, 4, 12] },
    { m: 'Sep 26', values: [91, 18, 69] }, { m: 'Aug 26', values: [42, 13, 34] },
    { m: 'Jul 26', values: [0, 0, 0] }, { m: 'Jun 26', values: [0, 0, 0] },
  ];
  return <div className="chart-area bar-chart">
    <div className="bar-y-labels">
      <span>1200</span>
      <span>900</span>
      <span>600</span>
      <span>300</span>
      <span>0</span>
    </div>
    <div className="bar-plot">
      <div className="bar-grid">
        {[0,1,2,3,4].map(i => <i key={i} />)}
      </div>
      <div className="bar-groups">
        {groups.map(group => 
        <div className="bar-group" key={group.m}>
          <div className="bars">{group.values.map((height, i) => 
            <i key={i} className={`bar bar-${i}`} style={{ height: `${height}%` }} />)}
          </div>
          <span>{group.m}</span>
        </div>)}
      </div>
    </div>
  </div>;
}

function ChartCard({ title, subtitle, children, controls, stats, link }) {
  return <section className="chart-card">
    <div className="chart-heading">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="chart-actions">
        {controls}
        <button className="text-link">{link}<ArrowRight size={14}/></button>
      </div>
    </div>
    <div className="chart-stats">
      {stats}
    </div>{children}
  </section>;
}

export default function Charts({ range, setRange, period, setPeriod }) {
  return <section className="charts-grid">
    <ChartCard title="Gold Rate Price Trend" subtitle="Historical board rate fluctuations per gram" link="Full Report" stats={<><span>Lowest in 7D: <b>₹12,730</b></span><span>Average: <b>₹12,961</b></span><span>Highest: <b className="amber-text">₹13,385</b></span></>} controls={<div className="segmented">{['7D','15D','30D'].map(value => <button key={value} onClick={() => setRange(value)} className={range === value ? 'selected' : ''}>{value}</button>)}</div>}><LineChart /></ChartCard>
    <ChartCard title="Customer Registrations" subtitle="Monthly Scheme vs Schemeless (Sign Up Only)" link="Directory" stats={<><span>Total Signups ({period}): <b className="blue-text">1,817 (100%)</b></span><span>Scheme Joined: <b className="green-text">397 (22%)</b></span><span>Sign Up Only: <b className="orange-text">1,420 (78%)</b></span></>} controls={<div className="segmented">{['6M','12M'].map(value => <button key={value} onClick={() => setPeriod(value)} className={period === value ? 'selected' : ''}>{value}</button>)}</div>}><div className="legend"><span className="green-dot">● Scheme Joined</span><span className="orange-dot">● Sign Up Only</span><span className="blue-dot">● Total Signups (100%)</span></div><BarChart /></ChartCard>
  </section>;
}

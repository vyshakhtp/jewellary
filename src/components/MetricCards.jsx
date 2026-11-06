import React from 'react';
import { UsersRound, CircleDollarSign, WalletCards, CreditCard } from 'lucide-react';

const metrics = [
  { label: 'TOTAL COLLECTIONS', value: '₹2,092,610', note: '1,285 payments processed', icon: WalletCards, tone: 'green', tag: 'Collections' },
  { label: 'CUSTOMER ACCOUNTS', value: '1,817', note: '22% enrolled (397 joined)', icon: UsersRound, tone: 'blue', tag: 'Customers' },
  { label: 'SCHEME ENROLLMENTS', value: '409', note: 'Total active saving plans', icon: CreditCard, tone: 'orange', tag: 'Schemes' },
  { label: 'GOLD BOARD RATE', value: '₹13,140', note: 'per gram standard rate', icon: CircleDollarSign, tone: 'gold', tag: '↘ -245' },
];

export default function MetricCards() {
  return <section className="metric-grid">
    {metrics.map(({ label, value, note, icon: Icon, tone, tag }) => 
    <article className="metric-card" key={label}>
      <div className="metric-top">
        <span className={`metric-icon ${tone}`}><Icon size={18}/></span>
        <span className={`metric-tag ${tone === 'gold' ? 'negative' : ''}`}>{tag}</span>
      </div>
      <div className="metric-label">{label}</div>
      <div className={`metric-value ${tone}`}>{value}</div>
      <div className="metric-note">{note}</div></article>)}
    </section>;
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function QuickNavigation({ setActive }) {
  return <section className="quick-card">
    <h2>Quick Navigation &amp; Reports</h2>
    <div className="quick-links">
      <button onClick={() => setActive('Customers')}>View customers <ArrowRight size={14}/></button>
      <button onClick={() => setActive('Payment Entries')}>Record a payment <ArrowRight size={14}/></button>
      <button onClick={() => setActive('Gold Rate Report')}>Gold rate report <ArrowRight size={14}/></button>
      </div>
    </section>;
}

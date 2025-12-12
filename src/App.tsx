import React from 'react';
import { OrgChart } from './components/OrgChart';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-neutral-900 mb-2">Tree Filling Window</h1>
          <p className="text-neutral-600">Agency Organization Chart</p>
        </div>
        <OrgChart />
      </div>
    </div>
  );
}

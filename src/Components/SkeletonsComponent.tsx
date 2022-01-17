import { Component } from 'react';

function WideCard() {
  return (
    <div className="w-full bg-red bg-white p-3 rounded-lg shadow-sm border border-gray-400">
      <div className="animate-pulse">
        <div className="w-full py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-2/4 py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-1/4 py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-2/4 py-2 bg-slate-200 rounded-md"></div>
      </div>
    </div>
  );
}

function TallCard() {
  return (
    <div className="w-1/3 h-auto bg-white shadow-sm rounded-lg p-3 border border-gray-400">
      <div className="animate-pulse">
        <div className="w-20 h-20 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-full py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-full py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-full py-2 bg-slate-200 rounded-md mb-3"></div>
        <div className="w-full py-2 bg-slate-200 rounded-md"></div>
      </div>
    </div>
  );
}

export class SkeletonsComponent extends Component {
  render() {
    return (
      <div className="flex flex-col space-y-5">
        <WideCard />
        <div className="flex space-x-4">
          <TallCard />
          <TallCard />
          <TallCard />
        </div>
      </div>
    );
  }
}

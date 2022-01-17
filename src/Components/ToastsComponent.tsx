import { Component } from 'react';
import { ColoredToasts } from './ColoredToasts';
import { UncoloredToasts } from './UncoloredToasts';
import { UncoloredToastsBorder } from './UncoloredToastsBorder';

export class ToastsComponent extends Component {
  render() {
    return (
      <div className="flex flex-col space-y-3">
        <div className="w-2/3 mx-auto bg-white p-3 rounded-lg shadow-sm">
          <ColoredToasts />
        </div>
        <div className="w-2/3 mx-auto bg-slate-800 p-3 rounded-lg shadow-sm">
          <UncoloredToasts />
        </div>
        <div className="w-2/3 mx-auto bg-white p-3 rounded-lg shadow-sm">
          <UncoloredToastsBorder />
        </div>
      </div>
    );
  }
}

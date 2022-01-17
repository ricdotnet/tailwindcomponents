import { Component } from 'react';
import { CheckIcon, CrossIcon, InfoIcon, WarnIcon } from './Icons';

function ToastSuccess() {
  return (
    <div className='text-green-700 bg-white px-10 py-3 rounded-lg shadow-sm'>
      <div className="flex items-center space-x-2">
        <CheckIcon />
        <div>Success Toast.</div>
      </div>
    </div>
  );
}

function ToastWarning() {
  return (
    <div className='text-yellow-600 bg-white px-10 py-3 rounded-lg shadow-sm'>
      <div className="flex items-center space-x-2">
        <WarnIcon />
        <div>Warning Toast.</div>
      </div>
    </div>
  );
}

function ToastInfo() {
  return (
    <div className='text-blue-700 bg-white px-10 py-3 rounded-lg shadow-sm'>
      <div className="flex items-center space-x-2">
        <InfoIcon />
        <div>Info Toast.</div>
      </div>
    </div>
  );
}

function ToastError() {
  return (
    <div className='text-red-700 bg-white px-10 py-3 rounded-lg shadow-sm'>
      <div className="flex items-center space-x-2">
        <CrossIcon />
        <div>Error Toast.</div>
      </div>
    </div>
  );
}

export class UncoloredToasts extends Component {
  render() {
    return (
      <div className="flex flex-col space-y-3">
        <ToastSuccess />
        <ToastWarning />
        <ToastInfo />
        <ToastError />
      </div>
    );
  }
}

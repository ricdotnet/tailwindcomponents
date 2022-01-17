import { Component } from 'react';
import { CheckIcon, WarnIcon, InfoIcon, CrossIcon } from './Icons';

function ToastSuccess() {
  return (
    <div className="w-full bg-green-200 text-green-800 py-3 px-10 rounded-lg shadow border border-green-500">
      <div className="flex items-center space-x-2">
        <CheckIcon />
        <div>Success Toast.</div>
      </div>
    </div>
  );
}

function ToastWarning() {
  return (
    <div className="w-full bg-yellow-200 text-yellow-800 py-3 px-10 rounded-lg shadow border border-yellow-500">
      <div className="flex items-center space-x-2">
        <WarnIcon />
        <div>Warning Toast.</div>
      </div>
    </div>
  );
}

function ToastInfo() {
  return (
    <div className="w-full bg-blue-200 text-blue-800 py-3 px-10 rounded-lg shadow border border-blue-500">
      <div className="flex items-center space-x-2">
        <InfoIcon />
        <div>Info Toast.</div>
      </div>
    </div>
  );
}

function ToastError() {
  return (
    <div className="w-full bg-red-200 text-red-800 py-3 px-10 rounded-lg shadow border border-red-500">
      <div className="flex items-center space-x-2">
        <CrossIcon />
        <div>Error Toast.</div>
      </div>
    </div>
  );
}

export class ColoredToasts extends Component {
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

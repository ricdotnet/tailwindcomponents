import { CheckIcon } from '../Components/Icons';

export function Toast(props: any) {
  return (
    <div
      className="text-emerald-500 bg-white px-10 py-3 rounded-lg shadow-sm border border-slate-300 cursor-pointer"
      onClick={props.handleToastRemove}
    >
      <div className="flex items-center space-x-2">
        <CheckIcon />
        <div>{props.text}</div>
      </div>
    </div>
  );
}

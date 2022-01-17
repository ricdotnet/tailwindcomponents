import { Layout } from '../Layouts/Layout';

// @ts-ignore
export function ButtonPlain({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-slate-200 rounded-md shadow-sm font-bold hover:bg-slate-300 active:bg-slate-200 ease-in-ou duration-150">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonPrimary({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-blue-500 rounded-md shadow-sm font-bold hover:bg-blue-600 active:bg-blue-400 text-white ease-in-ou duration-150 text-shadow">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonSuccess({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-green-500 rounded-md shadow-sm font-bold hover:bg-green-600 active:bg-green-400 text-white ease-in-ou duration-150 text-shadow">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonWarning({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-yellow-500 rounded-md shadow-sm font-bold hover:bg-yellow-600 active:bg-yellow-400 text-white ease-in-ou duration-150 text-shadow">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonError({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-red-500 rounded-md shadow-sm font-bold hover:bg-red-600 active:bg-red-400 text-white ease-in-ou duration-150">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonDark({ label }) {
  return (
    <div>
      <button className="px-5 py-2 bg-slate-500 rounded-md shadow-sm font-bold hover:bg-slate-600 active:bg-slate-400 text-white ease-in-ou duration-150">
        {label}
      </button>
    </div>
  );
}

// border button

// @ts-ignore
export function ButtonPlainOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-slate-300 hover:border-slate-400 rounded-md shadow-sm ease-in-ou duration-150 text-slate-500 hover:text-slate-700 active:text-slate-300 active:border-slate-300">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonPrimaryOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-blue-500 hover:border-blue-600 rounded-md shadow-sm ease-in-ou duration-150 text-blue-500 hover:text-blue-700 active:text-blue-300 active:border-blue-300">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonSuccessOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-green-500 hover:border-green-600 rounded-md shadow-sm ease-in-ou duration-150 text-green-500 hover:text-green-700 active:text-green-300 active:border-green-300">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonWarningOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-yellow-500 hover:border-yellow-600 rounded-md shadow-sm ease-in-ou duration-150 text-yellow-500 hover:text-yellow-700 active:text-yellow-300 active:border-yellow-300">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonErrorOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-red-500 hover:border-red-600 rounded-md shadow-sm ease-in-ou duration-150 text-red-500 hover:text-red-700 active:text-red-300 active:border-red-300">
        {label}
      </button>
    </div>
  );
}

// @ts-ignore
export function ButtonDarkOutline({ label }) {
  return (
    <div>
      <button className="px-5 py-2 border border-slate-500 hover:border-slate-600 rounded-md shadow-sm ease-in-ou duration-150 text-slate-500 hover:text-slate-700 active:text-slate-300 active:border-slate-300">
        {label}
      </button>
    </div>
  );
}

export function Buttons() {
  return (
    <Layout>
      <div className="flex flex-col space-y-3 text-center">
        <ButtonPlain label="Plain Button" />
        <ButtonPrimary label="Primary Button" />
        <ButtonSuccess label="Success Button" />
        <ButtonWarning label="Warning Button" />
        <ButtonError label="Error Button" />
        <ButtonDark label="Dark Button" />
        <br />
        <br />
        <ButtonPlainOutline label="Plain Outline Button" />
        <ButtonPrimaryOutline label="Primary Outline Button" />
        <ButtonSuccessOutline label="Success Outline Button" />
        <ButtonWarningOutline label="Warning Outline Button" />
        <ButtonErrorOutline label="Error Outline Button" />
        <ButtonDarkOutline label="Dark Outline Button" />
      </div>
    </Layout>
  );
}

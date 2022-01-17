import { Link } from 'react-router-dom';

export function Layout(props: any) {
  return (
    <>
      <div className="w-full bg-white justify-center py-4 shadow-sm flex space-x-2">
        <Link to="/skeletons">Skeletons</Link>
        <Link to="/toasts">Toasts</Link>
        <Link to="/inputs">Inputs</Link>
        <Link to="/buttons">Buttons</Link>
      </div>
      <div className="w-2/4 mx-auto mt-10 mb-10 bg-white p-5 rounded-md shadow">
        {props.children}
      </div>
    </>
  );
}

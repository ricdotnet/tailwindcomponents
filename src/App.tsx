import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Inputs } from './Pages/Inputs';
import { Skeletons } from './Pages/Skeletons';
import { Toasts } from './Pages/Toasts';
import { Buttons } from './Components/Buttons';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skeletons" element={<Skeletons />} />
        <Route path="/toasts" element={<Toasts />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </BrowserRouter>
  );
}

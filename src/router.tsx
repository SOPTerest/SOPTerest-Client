import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pin from './pages/Pin';
import PinDetail from './pages/PinDetail';
import PinEdit from './pages/PinEdit';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pin />} />
        <Route path="/detail/:id" element={<PinDetail />} />
        <Route path="/edit/:id" element={<PinEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

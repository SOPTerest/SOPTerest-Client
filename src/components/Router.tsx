import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPage from '../pages/MyPage';
import Board from '../pages/Board';
import BoardForm from '../pages/BoardForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/create" element={<BoardForm />} />
      </Routes>
    </BrowserRouter>
  );
}

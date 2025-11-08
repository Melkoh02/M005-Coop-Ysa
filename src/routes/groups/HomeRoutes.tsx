import { Navigate, Route, Routes } from 'react-router-dom';
import HomeScreen from '../../pages/HomeScreen';

export default function HomeRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={<HomeScreen />} />
      <Route path="*" element={<Navigate to="home" replace />} />
    </Routes>
  );
}

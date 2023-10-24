import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { PublicRoute } from './routes/PublicRoutes';
import { PrivateRoute } from './routes/PrivateRoutes';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PrivateRoute children={<Home/>} redirectTo="login"/> } />
          <Route
            path="/login"
            element={<PublicRoute children={<Login />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App

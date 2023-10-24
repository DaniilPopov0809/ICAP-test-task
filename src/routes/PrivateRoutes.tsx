import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

import { IRouteProps } from '../types/common';

export const PrivateRoute = ({ children, redirectTo = '/' }: IRouteProps) => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return !isLoggenIn ? <Navigate to={redirectTo} /> : children;
};
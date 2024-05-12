import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  // const jwt = localStorage.getItem('jwt');
  const jwt = useSelector((state: RootState) => state.user.jwt);

  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default RequireAuth;

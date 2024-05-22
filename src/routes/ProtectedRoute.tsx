import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useLoginStore} from '../../store/userStore';

interface Props {
  children?: ReactNode;
}

const ProtectedRoute = ({children}: Props) => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  if (!isLoggedIn()) {
    return <Navigate to="/login"/>;
  }

  return children;
};

export default ProtectedRoute;

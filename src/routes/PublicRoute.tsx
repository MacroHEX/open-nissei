import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useLoginStore} from '../../store/userStore';

interface Props {
  children?: ReactNode;
}

const PublicRoute = ({children}: Props) => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  if (isLoggedIn()) {
    return <Navigate to="/"/>;
  }

  return children;
};

export default PublicRoute;
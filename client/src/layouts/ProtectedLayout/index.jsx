import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { Home } from '../../pages';

const ProtectedLayout = () => {
  const { token } = useSelector((state) => state.auth);
  return !token ? <Outlet/> : <Navigate to = {Home}/>;
}

export default ProtectedLayout
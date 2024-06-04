import { useContext } from 'react'
import { Context } from './../context/Context';
import { Outlet, Navigate } from 'react-router-dom';


const ProtectedRoute = () => {

    const {auth} = useContext(Context);

  return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoute
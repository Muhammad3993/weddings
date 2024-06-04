import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from '../utils/ProtectedRoute';

// import components
import Chat from '../components/chat/Chat';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';


// import pages
import Home from '../pages/Home';
import Managers from '../pages/Managers';

const AllRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route element={ <ProtectedRoute/> }>
          <Route path='/' element={ <Home/> } />
          <Route path='/manager' element={ <Managers/> } />
        </Route>
      </Routes>
      <Footer/>
      <Chat/>
    </>
  )
}

export default AllRoutes
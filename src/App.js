
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Inventories from './components/Inventories/Inventories';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventories />
        </RequireAuth>}></Route>
      </Routes>


      <ToastContainer />

    </div>
  );
}

export default App;

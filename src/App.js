import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddTask from './Components/AddTask';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import MyTask from './Components/MyTask';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';
import SignUp from './Components/SignUp';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/addtask' element={
          <PrivateRoute>
        <AddTask />
        </PrivateRoute>
        }></Route>
        <Route path='/mytask' element={
          <PrivateRoute>
        <MyTask />
        </PrivateRoute>
        }></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

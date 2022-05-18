import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import MyTask from './Components/MyTask';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import Users from './Components/Users';

function App() {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/addtask' element={<AddTask />}></Route>
        <Route path='/mytask' element={<MyTask />}></Route>
      </Routes>
    </div>
  );
}

export default App;

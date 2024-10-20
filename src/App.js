import logo from './logo.svg';
import './App.css';
import AddUser from "./components/AddUser";
import NavBar from './components/NavBar';
import CrudOperations from './components/CrudOperations';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path='/' element={<CrudOperations />} />
      <Route path='/all' element={<AllUsers />} />
      <Route path='/add'element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />} />
     
     </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;

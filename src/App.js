
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
import Services from './pages/Services';
// import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Abouttc from './pages/Abouttc';
import Aboutntc from './pages/Aboutntc';
import Frontend from './components/frontend/Frontend';
import Backend from './components/backend/Backend';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Setting from './pages/Setting';

function App() {
  return (
    <div className="App">
         
      
     
      <Routes>
        <Route exact path='/' element={<Frontend/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}>
            <Route path='aboutntc' element={<Aboutntc/>}></Route>
            <Route path='aboutme' element={<Aboutme/>}></Route>
            <Route path='abouttc' element={<Abouttc/>}></Route>
          </Route>
          <Route path='services' element={<Services/>}></Route>
          <Route path='aboutme' element={<Aboutme/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Route>

        <Route path='/admin' element={<Backend/>}>
          <Route index element={<Admin/>}/>
          <Route path='setting' element={<Setting/>}></Route>
        </Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;

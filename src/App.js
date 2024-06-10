import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Front from './components/Front';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/viewall" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

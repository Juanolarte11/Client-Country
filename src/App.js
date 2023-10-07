import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Bienvenido from './components/Bienvenido/Bienvenido.jsx'
import CountryDetail from './components/CountryDetail/CountryDetail.jsx';
import AddActivity from './components/AddActivity/AddActivity.jsx'
import Detail from './components/Detail/Detail.jsx';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Bienvenido/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/countries/:id' element={<CountryDetail/>}/>
        <Route path='/activity' element={<AddActivity/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  );
}


export default App;


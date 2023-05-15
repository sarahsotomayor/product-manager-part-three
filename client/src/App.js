import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" /> //default makes this the default path
          <Route element={<Main/>} path="/product/" default/> //default makes this the default path
          <Route element={<Detail/>} path="/product/:id" />
          <Route element={<Update/>} path="/product/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

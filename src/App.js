import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import OurCoffeePage from './components/OurCoffeePage/OurCoffeePage'
import ForYourPleasurePage from './components/ForYourPleasurePage/forYourPleasurePage'
import CoffeeItemPage from './components/CoffeItemPage/CoffeeItemPage'

import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="SomeProj/" element={<HomePage />} />
        <Route path="SomeProj/our-coffee" element={<OurCoffeePage />} />
        <Route path="SomeProj/for-your-pleasure" element={<ForYourPleasurePage />} />
         <Route path="SomeProj/coffee-item/:id" element={<CoffeeItemPage />} />
      </Routes>
    </div>
  );
}

export default App;

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../page-layout/PageLayout';
import HomePage from '../home-page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" render={() => <HomePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;

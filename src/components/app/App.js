import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../page-layout/PageLayout';
import HomePage from '../home-page/HomePage';
import ProjectListPage from '../project-list-page/ProjectListPage';
import AboutPage from '../../about-page/AboutPage';
import ContactPage from '../../contact-page/ContactPage';
import NotFoundPage from '../not-found-page/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;

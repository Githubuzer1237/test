import React, { lazy, Suspense, useState, useEffect, createContext } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PreLoader from './components/PreLoader/PreLoader';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import AppRoute from './components/AppRoute';

const Home = lazy(() => import('./pages/Home'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage/NotFoundPage'));
const NewsHero = lazy(() => import('./components/NewsHero/NewsHero'));
const Society = lazy(() => import('./components/Society/Society'));
const Tech = lazy(() => import('./components/Tech/Tech'));
const Culture = lazy(() => import('./components/Culture/Culture'));
const Register = lazy(() => import('./pages/Register'));
const Log = lazy(() => import('./pages/Log'));
const Personal = lazy(() => import('./pages/Personal'));
const EditProfile = lazy(() => import('./components/EditProfile/Edit'));
const TicTacToe = lazy(() => import('./components/TicTacToe/TicTacToe'));
const Snake = lazy(() => import('./components/Snake/Snake'));
const FlappyBird = lazy(() => import('./components/FlappyBird/FlappyBird'));
const Games = lazy(() => import('./components/Games/Games'));
const Tir = lazy(() => import('./components/Tir/Tir'));
const Magaz = lazy(() => import('./pages/magaz'));
const Teacher = lazy(() => import('./pages/Teacher'));

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const isNotFoundPage = !["/", "/Shelter", "/Teacher", "/Register", "/Login", "/MainPage", "/Society", "/Tech", "/Culture", "/TicTacToe", "/Snake", "/flappybird", "/Games", "/Tetris", "/Tir", "/Shop", "/news"].includes(location.pathname);

  return (
    <>
      {loading && <PreLoader />}
      {!isNotFoundPage && <Header />}
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsHero />} />
          <Route path="/Society" element={<Society />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Log />} />
          <Route path="/MainPage" element={<Personal />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/Snake" element={<Snake />} />
          <Route path="/flappybird" element={<FlappyBird />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Tir" element={<Tir />} />
          <Route path="/Shop" element={<Magaz />} />
          <Route path="/Teacher" element={<Teacher />} />
        </Routes>
      </Suspense>
      {!isNotFoundPage && <Footer />}
      <Analytics />
    </>
  );
};

export default App;

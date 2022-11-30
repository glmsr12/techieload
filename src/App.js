import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Routes>
      <Route element={<Header />} />

      <Container>
        <Route path="/" element={<HomeScreen />} exact />
      </Container>

      <Route element={<Footer />} />
    </Routes>
  );
}

export default App;

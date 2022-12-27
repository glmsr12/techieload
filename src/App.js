import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======

>>>>>>> 8d43a26 ("update files")
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
=======
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
>>>>>>> 8d43a26 ("update files")
  );
}

export default App;

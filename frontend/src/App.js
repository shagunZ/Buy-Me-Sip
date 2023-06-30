import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
import Footer from './components/Footer';
import HomePage from './components/HomePage'

function App() {
  return (
    <CartProvider>      
    <Container>
     <NavbarComponent/>
     <BrowserRouter>
     <Routes>
      <Route index element={<Store/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/cancel" element={<Cancel/>} />
           </Routes>
      </BrowserRouter>
      <Footer/>
    </Container>
    </CartProvider>
  );
}

export default App;

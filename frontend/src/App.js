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


function App() {
  return (
    <CartProvider>      
    <Container>
     <NavbarComponent/>
     <BrowserRouter>
     <Routes>
      <Route index element={<Store/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/cancel" element={<Cancel/>} />
           </Routes>
      </BrowserRouter>
      <hr className='mt-5'></hr>
      <Footer/>
    </Container>
    </CartProvider>
  );
}

export default App;

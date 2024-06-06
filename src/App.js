import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import PageNotFound from './Component/Pagenotfound/PageNotFound';
import Payment from './Component/Payment/Payment';
import Pcrvacy from './Component/PrivacyPolicy/Pcrvacy';
import Shop from './Component/Shop/Shop';
import Signup from './Component/Signup/Signup';
import SinglePage from './Component/Singlepage/SinglePage';
import Refund from './Component/RefundPolicy/Refund';
import Term from './Component/Term&Condi/Term';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/privacypolicy' element={<Pcrvacy />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/details/:_id' element={<SinglePage />} />
          <Route path='/refundpolicy' element={<Refund />} />
          <Route path='/term' element={<Term />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

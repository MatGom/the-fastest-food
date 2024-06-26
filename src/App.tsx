import { Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext.tsx';

import Navigation from './components/Navigation/Navigation.tsx';
import Home from './pages/Home/Home.tsx';
import Deals from './pages/Deals/Deals.tsx';
import Pizzas from './pages/Pizzas/Pizzas.tsx';
import Burgers from './pages/Burgers/Burgers.tsx';
import Desserts from './pages/Desserts/Desserts.tsx';
import Drinks from './pages/Drinks/Drinks.tsx';
import Footer from './components/Footer/Footer.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

function App() {
  return (
    <BasketProvider>
      <ScrollToTop />
      <Navigation />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/deals' element={<Deals />} />
          <Route path='/pizzas' element={<Pizzas />} />
          <Route path='/burgers' element={<Burgers />} />
          <Route path='/desserts' element={<Desserts />} />
          <Route path='/drinks' element={<Drinks />} />
        </Routes>
      </div>
      <Footer />
    </BasketProvider>
  );
}

export default App;

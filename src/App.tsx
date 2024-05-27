import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.tsx';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/deals' element={<h2>Deals</h2>} />
        <Route path='/pizzas' element={<h2>Pizzas</h2>} />
        <Route path='/burgers' element={<h2>Burgers</h2>} />
        <Route path='/desserts' element={<h2>Desserts</h2>} />
        <Route path='/drinks' element={<h2>Drinks</h2>} />
      </Routes>
    </div>
  );
}

export default App;

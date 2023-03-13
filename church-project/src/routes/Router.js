import { Routes, Route } from 'react-router-dom';
import { Home, About, Donation, Where } from '../views/index';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/sobre'
        element={<About />}
      />
      <Route
        path='/doe'
        element={<Donation />}
      />
      <Route
        path='/onde'
        element={<Where />}
      />
    </Routes>
  );
};

export default Router;

import { Route, Routes, useLocation } from 'react-router-dom';
import { paths } from './paths';

import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
    const location = useLocation();

  
    return (
      <Routes location={location} key={location.pathname}>
        <Route path={paths.home} element={<Home />} />
      </Routes>
    );
  };
  
  export default AppRoutes;
  
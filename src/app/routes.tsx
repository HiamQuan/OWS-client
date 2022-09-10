import {Route, Routes as RouterWrapper} from 'react-router-dom';
import NotFoundPage from './features/NotFoundPage';
import {DefaultLayout} from './themes';

import HomePage from './features/HomePage';
import OrderPage from './features/OrderPage';

const AppRouter = () => {
  return (
    <RouterWrapper>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="order" element={<OrderPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </RouterWrapper>
  );
};

export default AppRouter;

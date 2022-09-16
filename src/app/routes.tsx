import {Route, Routes as RouterWrapper} from 'react-router-dom';
import NotFoundPage from './features/NotFoundPage';
import {AdminLayout, DefaultLayout} from './themes';

import HomePage from './features/HomePage';
import SlotPage from './features/SlotPage';
import OrderPage from './features/OrderPage';
import ClassSchedulePage from './features/ClassSchedule';

const AppRouter = () => {
  return (
    <RouterWrapper>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path='slots' element={<SlotPage />} />
        <Route path='calendar' element={<ClassSchedulePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </RouterWrapper>
  );
};

export default AppRouter;

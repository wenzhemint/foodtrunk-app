import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './redux/menu/menuSlice';
import facilitySlice from './redux/facility/facilitySlice';
import logger from 'redux-logger';

const loggerMiddleware = process.env.NODE_ENV === 'development' ? logger : [];
  
const store = configureStore({
  reducer: {
    menu: menuSlice,
    facility: facilitySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;

/** Redux */
import { configureStore } from '@reduxjs/toolkit';
import fuayeReducer from './fuayeSlice';

/** Init Store */
export default configureStore({
  reducer: {
    fuaye: fuayeReducer,
  },
});

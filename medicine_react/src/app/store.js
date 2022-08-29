import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '@store/info/infoSlice';
import medicineSlice from 'src/store/modules/medicine/medicineSlice';

export const store = configureStore({
  reducer: {
    teamInfo: infoReducer,
    medicineList:medicineSlice
  },
});

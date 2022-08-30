import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showUsage:false
};

export const infoSlice = createSlice({
  name: 'view',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      setShowUsage: (state, action) => {
          state.showUsage = action.payload;
        }
    
  },
});

export const {
    setShowUsage
} = infoSlice.actions;


export default infoSlice.reducer;




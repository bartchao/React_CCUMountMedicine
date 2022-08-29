import { createSlice } from '@reduxjs/toolkit';
import DefaultPreset from 'src/common/medicine.json';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  medicineList: Calculate(2, 8),
};

export const infoSlice = createSlice({
  name: 'medicineList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMedicineList: (state, action) => {
      state.medicineList = Calculate(state.teamDays, state.teamPerson);
    },
    deleteMedicineItem: (state, action) => {
      let { index, payload } = action.payload;
      state.medicineList[index].item = payload;
    },
  },
});

export const { setMedicineList, deleteMedicineItem } = infoSlice.actions;
export const medicineList = (state) => state.medicineList.medicineList;

export default infoSlice.reducer;

function Calculate(days, person) {
  const medicine = DefaultPreset.medicine;
  medicine.map((category, index) => {
    let items = category.item;
    items.map((item) => {
      item.uuid = uuidv4();
      item.count = eval(item.formula);
    });
  });
  return medicine;
}

export const deleteItem = (payload) => (dispatch, getState) => {
  let medicineList = Object.assign({}, getState().medicineList.medicineList);
  let { index, uuid } = payload;
  let categoryList = [...medicineList[index].item];
  let test = categoryList.filter((item) => item.uuid !== uuid);
  let returnValue = {
    index: index,
    payload: test,
  };
  dispatch(deleteMedicineItem(returnValue));
};

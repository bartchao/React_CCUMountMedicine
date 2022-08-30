import { createSlice,current } from '@reduxjs/toolkit';
import DefaultPreset from 'src/common/medicine.json';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  medicineList: CalculateAll(2, 8),
};

export const infoSlice = createSlice({
  name: 'medicineList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMedicineList: (state, action) => {
      state.medicineList = CalculateAll(state.teamDays, state.teamPerson);
    },
    deleteMedicineItem: (state, action) => {
      let { index, payload } = action.payload;
      state.medicineList[index].item = payload;
    },
    addMedicineItemInCategory: (state, action) => {
      let { target, ...payload } = action.payload;
      state.medicineList[target].item = [
        ...state.medicineList[target].item,
        payload,
      ];
    },
    modifyMedicineItemInCategory: (state, action) => {
      let { uuid, value } = action.payload;
      let medicineList = state.medicineList;
      for (const category in medicineList) {
        let targetItem = medicineList[category].item.filter(
          (item) => item.uuid === uuid
        );
        if (targetItem.length>0) {
          let obj = targetItem[0];
          obj.count = value;
          //console.log(current(medicineList));
          break;
        }

      }
    },
  },
});

export const {
  setMedicineList,
  deleteMedicineItem,
  addMedicineItemInCategory,
  modifyMedicineItemInCategory,
} = infoSlice.actions;
export const medicineList = (state) => state.medicineList.medicineList;

export default infoSlice.reducer;

function CalculateAll(days, person) {
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
function Calculate(days, person, formula) {
  return Number(eval(formula));
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

export const addMedicineItem = (payload) => (dispatch, getState) => {
  let { target, ...formData } = payload;
  let { teamDays, teamPerson } = getState().teamInfo;
  let { count, formula } = formData;
  if (count === '' && formula !== '') {
    count = Calculate(teamDays, teamPerson, formula);
    payload = { ...payload, count };
    //   console.log(payload);
  }
  let uuid = uuidv4();
  payload = { ...payload, uuid };
  dispatch(addMedicineItemInCategory(payload));
};


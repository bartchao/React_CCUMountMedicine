import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teamName: 'Hello',
    teamPerson: 8,
    teamDays: 2,
    teamAttitude: 2500,

};


export const infoSlice = createSlice({
    name: 'teamInfo',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setTeamData: (state, action) => {
            state.teamName = action.payload.teamName;
            state.teamPerson = Number(action.payload.teamPerson);
            state.teamDays = Number(action.payload.teamDays);
            state.teamAttitude = Number(action.payload.teamAttitude);
        },
    }
});

export const { setTeamData} = infoSlice.actions;


export default infoSlice.reducer;


import { createSlice } from '@reduxjs/toolkit'

type Facility = {
  facilities: object;
}

const initialState: Facility = {
    facilities: {}
}

const facilitySlice = createSlice({
  name: 'facility',
  initialState: initialState,
  reducers: {
    updateFacilities(state, action) {
      state.facilities = action.payload
    }
  }
})

export const { updateFacilities } = facilitySlice.actions
export default facilitySlice.reducer
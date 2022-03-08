import { createSlice } from '@reduxjs/toolkit'

const organizations = createSlice({
  name: 'organizations',
  initialState: {
    data: [],
    selectedOrganization: null,
  },
  reducers: {
    setSelectedOrganization: (state, { payload }) => {
      state.selectedOrganization = payload
    },
  },
})

export const { setSelectedOrganization } = organizations.actions

export default organizations.reducer

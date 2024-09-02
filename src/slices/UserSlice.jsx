import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Amanda", email: 'amanda@gmail.com'},
    {id: 2, name: "Nancy", email: 'nancy@gmail.com'},
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // update and push it to the screen
        addUser: (state, action) => {
            state.push(action.payload);
        },

        // edit the user
        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
              existingUser.name = name;
              existingUser.email = email;
            }
          },

        // delete user
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
              return state.filter(user => user.id !== id);
            }
          }
        }
})


export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  iduser?: number;
  name?: string;
  bio?: string;
  imgurl?: string;
  token?: string;
  email?: string;
  isLogged: boolean;
}
const userReduce = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  } as UserState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, {
        iduser: action.payload.iduser,
        name: action.payload.name,
        bio: action.payload.bio,
        imgurl: action.payload.imgurl,
        token: action.payload.token,
        email: action.payload.email,
        isLogged: true,
      });
    },
    removeUser(state) {
      Object.assign(state, {
        iduser: undefined,
        name: undefined,
        bio: undefined,
        imgurl: undefined,
        token: undefined,
        email: undefined,
        isLogged: false,
      });
    },
  },
});

export const { setUser, removeUser } = userReduce.actions;

export default userReduce.reducer;

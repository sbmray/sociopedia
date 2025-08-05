import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Toggle light/dark mode
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    // Login and store user/token
    setLogin: (state, action) => {
      state.user = action.payload.user || null;
      state.token = action.payload.token || null;
    },

    // Logout clears everything
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.posts = [];
    },

    // Set user friends safely
    setFriends: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          friends: Array.isArray(action.payload.friends)
            ? action.payload.friends
            : [],
        };
      }
    },

    // Replace entire posts list
    setPosts: (state, action) => {
      state.posts = Array.isArray(action.payload.posts)
        ? action.payload.posts
        : [];
    },

    // Update a single post safely
    setPost: (state, action) => {
      if (!action.payload.post) return;
      state.posts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

export default authSlice.reducer;

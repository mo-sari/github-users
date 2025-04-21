import { createSlice } from "@reduxjs/toolkit";
import mockFollowers from "./mockData.js/mockFollowers";
import mockRepos from "./mockData.js/mockRepos";
import mockUser from "./mockData.js/mockUser";
import {
  GitHubFollower,
  GitHubRepository,
  GitHubUser,
} from "../types/GithubTypes";

type UserState = {
  githubUser: GitHubUser;
  repos: GitHubRepository[];
  followers: GitHubFollower[];
};

const initialState: UserState = {
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    sayHello: () => console.log("hello"),
  },
});

export default userSlice.reducer;
export const { sayHello } = userSlice.actions;

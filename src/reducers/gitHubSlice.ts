import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockFollowers from "./mockData.js/mockFollowers";
import mockRepos from "./mockData.js/mockRepos";
import mockUser from "./mockData.js/mockUser";
import {
  GitHubFollower,
  GitHubRepository,
  GitHubUser,
} from "../types/GithubTypes";
import axios from "axios";

type ResourceInfo = {
  limit: number;
  remaining: number;
  reset: number;
  used: number;
  resource: string;
};

type AppState = {
  githubUser: GitHubUser;
  repos: GitHubRepository[];
  followers: GitHubFollower[];
  error: { show: boolean; msg: string };
  loading: boolean;
  rate: ResourceInfo;
};

const initialState: AppState = {
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
  error: { show: false, msg: "" },
  loading: false,
  rate: {
    limit: 0,
    remaining: 0,
    reset: 0,
    used: 0,
    resource: "",
  },
};

export const fetchLimit = createAsyncThunk<
  ResourceInfo,
  void,
  { rejectValue: { show: boolean; msg: string } }
>("github/UserLimit", async (_, thunkAPI) => {
  try {
    const response = await axios("https://api.github.com/rate_limit");
    return response.data.rate;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({
      show: true,
      msg: error.message || "something went wrong",
    });
  }
});

export const fetchUser = createAsyncThunk<
  {
    githubUser: GitHubUser;
    repos: GitHubRepository[];
    followers: GitHubFollower[];
    rate: ResourceInfo;
  },
  string,
  { rejectValue: { show: boolean; msg: string } }
>("github/FetchUser", async (username: string, thunkAPI) => {
  try {
    const userResponse = await axios(
      `https://api.github.com/users/${username}`
    );
    const githubUser = userResponse.data;
    const { login, followers_url } = githubUser;

    const repoResponse = await axios(
      `https://api.github.com/users/${login}/repos?per_page=100`
    );
    const repos = repoResponse.data;

    const followersResponse = await axios(`${followers_url}`);
    const followers = followersResponse.data;

    const limitResponse = await axios("https://api.github.com/rate_limit");
    const rate = limitResponse.data.rate;

    return {
      githubUser,
      repos,
      followers,
      rate,
    };
  } catch (error: any) {
    if (error.status === 404) {
      return thunkAPI.rejectWithValue({
        show: true,
        msg: "user not found",
      });
    }
    return thunkAPI.rejectWithValue({
      show: true,
      msg: error.message || "Something went wrong",
    });
  }
});

export const gitHubSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = { show: false, msg: "" };
      })
      .addCase(
        fetchUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            githubUser: GitHubUser;
            repos: GitHubRepository[];
            followers: GitHubFollower[];
            rate: ResourceInfo;
          }>
        ) => {
          state.loading = false;
          state.githubUser = action.payload.githubUser;
          state.repos = action.payload.repos;
          state.followers = action.payload.followers;
          state.rate = action.payload.rate;
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? { show: true, msg: "Unknown error" };
      })
      .addCase(fetchLimit.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLimit.fulfilled,
        (state, action: PayloadAction<ResourceInfo>) => {
          state.loading = false;
          state.rate = { ...action.payload };
        }
      )
      .addCase(fetchLimit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? { show: true, msg: "Unknown error" };
      });
  },
});

export default gitHubSlice.reducer;

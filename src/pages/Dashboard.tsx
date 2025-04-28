import { Store, UnknownAction } from "@reduxjs/toolkit";
import { Repos, Search, User, Info } from "../components";
import { QueryClient } from "@tanstack/react-query";
import { fetchLimit, fetchUser } from "../reducers/gitHubSlice";
import { RootState } from "../store";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const loader =
  (
    store: Store<RootState> & {
      dispatch: ThunkDispatch<RootState, any, UnknownAction>;
    }
  ) =>
  async () => {
    store.dispatch(fetchLimit());
  };

export const action =
  (
    store: Store<RootState> & {
      dispatch: ThunkDispatch<RootState, unknown, UnknownAction>;
    },
    queryClient: QueryClient
  ) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const { username } = Object.fromEntries(formData);

    await store.dispatch(fetchUser(username as string));
  };

const Dashboard = () => {
  return (
    <>
      <Search />
      <Info />
      <User />
      <Repos />
    </>
  );
};

export default Dashboard;

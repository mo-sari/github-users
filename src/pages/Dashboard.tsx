import { Navbar, Repos, Search, User, Info } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";

const Dashboard = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </>
  );
};

export default Dashboard;

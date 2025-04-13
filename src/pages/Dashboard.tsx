import { Navbar, Repos, Search, User, Info } from "../components";
import { sayHello } from "../reducers/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Button } from "@mui/material";

const Dashboard = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
      <Button variant="contained" onClick={() => dispatch(sayHello())}>
        say hi
      </Button>
    </main>
  );
};

export default Dashboard;

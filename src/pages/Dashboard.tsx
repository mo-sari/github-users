import Container from "@mui/material/Container";
import { Navbar, Repos, Search, User, Info } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";

const Dashboard = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "#edf3f8" }}>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </Container>
  );
};

export default Dashboard;

import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <div>...loading</div>}
      <Outlet />
    </>
  );
};

export default Layout;

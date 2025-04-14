import { Grid } from "@mui/material";
import Followers from "./Followers";
import Card from "./Card";

const User = () => {
  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card></Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Followers></Followers>
        </Grid>
      </Grid>
    </>
  );
};
export default User;

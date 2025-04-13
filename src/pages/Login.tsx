import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LoginImg from "../images/login-img.svg";

const Login = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        bgcolor="#d7eef5"
      >
        <Grid>
          <img style={{ maxWidth: "600px" }} src={LoginImg} alt="Logo" />
        </Grid>
        <Typography
          sx={{
            fontFamily: "Special Gothic Expanded One",
            fontSize: "32px",
            mb: "1rem",
          }}
          variant="h4"
        >
          Github User
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            fontFamily: "Winky Rough",
            letterSpacing: "2px",
            fontSize: "20px",
            fontWeight: 100,
            px: "20px",
          }}
        >
          Login
        </Button>
      </Grid>
    </>
  );
};
export default Login;

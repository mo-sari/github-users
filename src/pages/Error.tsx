import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
        bgcolor="lightblue"
        sx={{
          m: 0,
          "& > *": {
            fontFamily: "Segoe UI Symbol",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Special Gothic Expanded One",
            mb: "1rem",
            fontSize: { xs: "8rem", md: "10rem" },
          }}
          variant="h1"
        >
          404
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textTransform: "capitalize",
            fontFamily: "Outfit",
            fontSize: "20px",
            fontWeight: "bold",
            mb: "10px",
          }}
        >
          sorry, the page you tried cannot be found
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            fontFamily: "Winky Rough",
            letterSpacing: "2px",
            fontSize: "20px",
            bgcolor: "primary.light",
          }}
        >
          Back Home
        </Button>
      </Grid>
    </>
  );
};
export default Error;

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Search = () => {
  const { rate, error } = useAppSelector((store) => store.user);

  return (
    <>
      {error.show && (
        <Typography variant="subtitle2" mb={-2} color="red">
          {error.msg}
        </Typography>
      )}
      <Grid
        py={2}
        container
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
      >
        <Grid size={{ xs: 12, md: 8 }} container>
          <Box
            component={Form}
            method="POST"
            sx={{ display: "flex", gap: 2 }}
            width="100%"
          >
            <TextField
              label="username"
              name="username"
              variant="outlined"
              required
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "150px" }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid sx={{ mx: "auto" }} container mt={{ xs: 2, md: 0 }}>
          <Typography>
            {rate.remaining} requests remained from {rate.limit}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Search;

import { Avatar, Typography, Box, Paper } from "@mui/material";
import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";

const Followers = () => {
  const { followers } = useAppSelector((store) => store.user);

  return (
    <>
      <Paper
        sx={{
          p: "1rem",
          mt: "1rem",
        }}
      >
        <Box sx={{ height: "210px", overflowX: "hidden", overflowY: "scroll" }}>
          {followers.map((f, i) => {
            const { avatar_url: img, html_url, login } = f;
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "0.5rem",
                }}
              >
                <Avatar
                  src={img}
                  alt={login}
                  sx={{ width: "45px", height: "45px" }}
                />
                <Box>
                  <Typography variant="button">{login}</Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    component={Link}
                    to={html_url}
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    {html_url}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </>
  );
};
export default Followers;

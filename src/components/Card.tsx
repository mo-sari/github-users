import { Avatar, Box, Paper, Typography, Button } from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";

const Card = () => {
  const { githubUser } = useAppSelector((store) => store.user);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <>
      <Paper
        sx={{
          p: "1rem",
          mt: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& > *": { mt: "1rem" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={avatar_url}
              alt={name}
              sx={{ width: 50, height: 50 }}
            />
            <Box sx={{ ml: "1rem" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {name}
              </Typography>
              <Typography variant="body2">
                @{twitter_username || "john doe"}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{
              color: "success.light",
              borderRadius: "20px",
              borderColor: "success.light",
            }}
          >
            Follow
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: "1rem" }}>
          {bio}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: "1rem" }}>
          <BusinessIcon /> {company}
        </Typography>
        <Typography variant="subtitle2">
          <LocationPinIcon /> {location || "earth"}
        </Typography>
        <Typography
          sx={{ color: "black" }}
          component={Link}
          to={`https://${blog}`}
          target="_blank"
          variant="subtitle2"
        >
          <InsertLinkIcon /> {company}
        </Typography>
      </Paper>
    </>
  );
};
export default Card;

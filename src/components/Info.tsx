import { useAppSelector } from "../hooks";

import { ItemCart } from "../types";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const UserInfo = () => {
  const { githubUser } = useAppSelector((store) => store.user);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <LibraryBooksOutlinedIcon />,
      label: "repos",
      value: public_repos,
      color: "#f9dbe7",
    },
    {
      id: 2,
      icon: <PeopleAltOutlinedIcon />,
      label: "followers",
      value: followers,
      color: "#d7f9fb",
    },
    {
      id: 3,
      icon: <PersonAddAltOutlinedIcon />,
      label: "followings",
      value: following,
      color: "#dfdff9",
    },
    {
      id: 4,
      icon: <TextSnippetIcon />,
      label: "gists",
      value: public_gists,
      color: "#fdf7e3",
    },
  ];

  return (
    <>
      <Grid spacing={2} container flexDirection={{ xs: "column", sm: "row" }}>
        {items.map((i) => {
          return (
            <Grid key={i.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Item {...i} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const Item = ({ icon, label, value, color }: ItemCart) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          fontSize: 32,

          "& > svg": {
            bgcolor: color,
            p: "10px",
            borderRadius: "50%",
            fill: "gray",
          },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={600}>
          {value}
        </Typography>
        <Typography variant="body2">{label}</Typography>
      </Box>
    </Paper>
  );
};

export default UserInfo;

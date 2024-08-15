import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider, Drawer, Input, List, ListItem } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const badge = "🔫";

//#region Styling
//allows styling from theme attributes, applies to a div element
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  flexGrow: 1,
}));

const StyledInput = styled(Input)(({ theme }) => ({
  color: "inherit",
  "& .MuiInput-input": {
    padding: theme.spacing(1, 1, 1, 5),
    flexGrow: 1,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
}));
//#endregion

export default function PrimarySearchAppBar() {
  const navigate = useNavigate(); 

  function handleSearch(event) {
    console.log("event value: " + event.target.value);
  }

  function handleNewPostClick() {
    console.log("New Post");
  }

  function handleFollowingClick() {
    console.log("Following");
  }

  function handleProfileClick() {
    navigate("/profile");
    console.log("Profile");
  }

  //#region drawer

  //hardcoded rn, was easier for testing
  const navItems = [
    <ListItem>
      <NavLink to="1">
        <Typography sx={{ color: "black" }}>something 1</Typography>
      </NavLink>
    </ListItem>,
    <ListItem>
      <NavLink to="2">
        <Typography sx={{ color: "black" }}>something 2</Typography>
      </NavLink>
    </ListItem>,
    <ListItem>
      <NavLink to="3">
        <Typography sx={{ color: "black" }}>something 3</Typography>
      </NavLink>
    </ListItem>,
    <ListItem>
      <NavLink to="4">
        <Typography sx={{ color: "black" }}>something 4</Typography>
      </NavLink>
    </ListItem>,
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ my: 2, color: "black", px: 1 }}>
          ByteShare
        </Typography>
        <Divider />
        <List>{navItems}</List>
      </Box>
    </Drawer>
  );
  //#endregion

  return (
    <AppBar sx={{ py: 1 }}>
      {drawer}
      <Toolbar>
        <IconButton size="large" edge="start" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mx: 1 }}
        />
        <NavLink to="/">
          <Typography
            variant="h2"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              color: "black",
            }}
          >
            ByteShare
          </Typography>
          <Typography
            variant="h3"
            sx={{ display: { xs: "none", sm: "block", md: "none" } }}
          >
            ByteShare
          </Typography>
          <Typography
            variant="h4"
            sx={{ display: { xs: "block", sm: "none", md: "none" } }}
          >
            ByteShare
          </Typography>
        </NavLink>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInput
            placeholder="Search…"
            type="search"
            onChange={handleSearch}
            fullWidth
          />
        </Search>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <IconButton size="large" onClick={handleNewPostClick} sx={{ ml: 1 }}>
            <AddCircleIcon />
          </IconButton>
          <IconButton
            size="large"
            onClick={handleFollowingClick}
            sx={{ mx: 1 }}
          >
            <Badge badgeContent={badge} color="info">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" onClick={handleProfileClick} edge="end">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

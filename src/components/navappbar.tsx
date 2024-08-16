import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Divider,
  Drawer,
  IconButton,
  Input,
  List,
  ListItemButton,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";

const badge = "🔫";
const initLogin = true;

export default function PrimarySearchAppBar() {
  //getting a navigate hook to go between routes
  const navigate = useNavigate();

  //#region drawer
  //state for menu drawer
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }

  const drawer = (
    <Box>
      <IconButton
        size="large"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <Box onClick={handleDrawerToggle}>
          <Typography variant="h4" sx={{ my: 2, px: 1 }}>
            ByteShare
          </Typography>
          <Divider />
          <List>
            <ListItemButton onClick={() => navigate("1")}>
              Goto 1
            </ListItemButton>
            <ListItemButton onClick={() => navigate("2")}>
              Goto 2
            </ListItemButton>
            <ListItemButton onClick={() => navigate("3")}>
              Goto 3
            </ListItemButton>
            <ListItemButton onClick={() => navigate("4")}>
              Goto 4
            </ListItemButton>
            <Divider />
            {/*<ListItemButton onClick={() => logout()}>Logout</ListItemButton>*/}
            <ListItemButton onClick={toggleLogin}>Logout</ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
  //#endregion

  //#region searchbar

  //getting them from provider
  const theme = useTheme();
  //allows styling from theme attributes, modifying an element or component
  const Search = styled("div")(() => ({
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

  const StyledInput = styled(Input)(() => ({
    color: "inherit",
    "& .MuiInput-input": {
      padding: theme.spacing(1, 1, 1, 5),
      flexGrow: 1,
    },
  }));

  const SearchIconWrapper = styled("div")(() => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
  }));

  //combines all the pieces of the styled components
  const searchBar = (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        placeholder="Search…"
        type="search"
        onChange={handleSearch}
        fullWidth
        autoFocus
      />
    </Search>
  );

  function handleSearch(event) {
    console.log("search input: " + event.target.value);
  }

  //#endregion

  //#region usermenu (title is wip)

  //state for determining if logged in
  //FIXME: this should probably be handled differently, this was mostly a proof of concept
  const [login, setLogin] = React.useState(initLogin);
  function toggleLogin() {
    setLogin(!login);
  }
  function handleLoginClick() {
    //navigate("/login");
    toggleLogin();
    console.log("Login");
  }

  //if logged out, only shows login button,
  //but if logged in, shows available options
  const userMenu = login ? (
    <Box>
      <IconButton
        onClick={() => {
          navigate("/newpost");
        }}
        sx={{ ml: 1 }}
      >
        <AddCircleIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          navigate("/following");
        }}
        sx={{ ml: 1 }}
      >
        <Badge badgeContent={badge} color="info">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton
        onClick={() => {
          navigate("/profile");
        }}
        edge="end"
        sx={{ ml: 1 }}
      >
        <AccountCircle />
      </IconButton>
    </Box>
  ) : (
    <Box>
      <IconButton onClick={handleLoginClick} edge="end" sx={{ ml: 1 }}>
        <LoginIcon />
      </IconButton>
    </Box>
  );

  //#endregion

  //#region titleLink
  const titleLink = (
    <Box sx={{ pl: 1 }}>
      <NavLink to="/">
        <Typography
          variant="h2"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "#121212",
          }}
        >
          ByteShare
        </Typography>
        <Typography
          variant="h3"
          sx={{
            display: { xs: "block", sm: "none" },
            color: "#121212",
          }}
        >
          ByteShare
        </Typography>
      </NavLink>
    </Box>
  );
  //#endregion

  return (
    <AppBar sx={{ py: 1 }}>
      <Toolbar>
        {drawer}
        <Divider orientation="vertical" variant="middle" flexItem />
        {titleLink}
        {searchBar}
        <Divider orientation="vertical" variant="middle" flexItem />
        {userMenu}
      </Toolbar>
    </AppBar>
  );
}

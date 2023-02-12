import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
  Container,
  Menu,
  Tooltip,
  MenuItem,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Logo } from "./Logo";
export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = ["О компании", "Наши работы", "Контакты"];
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFF", paddingY: "10px" }}
    >
      <Container maxWidth="xl" sx={{}}>
        <Toolbar disableGutters>
          {/* <Logo />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color={"black"}
            sx={{
              mr: 2,
              // display: { xs: "none", md: "flex" },
              fontFamily: "Marcellus SC",
              // fontWeight: 800,
              letterSpacing: ".2rem",
              color: "#000",
              fontSize: "24px",
            }}
          >
            RIVERSTONE
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color={"black"}
            sx={{
              mr: 2,
              // display: { xs: "none", md: "flex" },
              fontFamily: "Marcellus SC",
              // fontWeight: 800,
              letterSpacing: ".2rem",
              color: "#000",
              fontSize: "24px",
            }}
          >
            RIVERSTONE
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#2a78b4",
                    color: "#ffffff",
                  },
                  marginX: 2,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button sx={{ fontSize: "18px" }}>
              <a href="tel:+79139353904">+7 913 935-39-04</a>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import {
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 3, width: "100%", maxWidth: "700" }}>
          <Button
            variant="contained"
            sx={{ textTransform: "none", width: "100%", maxWidth: "250px" }}
          >
            Buyurtma qo'shish
          </Button>
          <Paper
            component="form"
            sx={{
              p: "2px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "none",
              backgroundColor: "#dbdbdb",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneIcon sx={{ color: "#000" }} />
            </Badge>
          </IconButton>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircleIcon fontSize="large" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/register"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </div>
  );
};

export default Header;

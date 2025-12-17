import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Stack,
  Paper,
  Popover,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Profile = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // get user from localStorage
  const storedData = localStorage.getItem("adminData");
  let adminData = null;

  try {
    adminData = storedData ? JSON.parse(storedData) : null;
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    adminData = null;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminData");
    navigate("/login"); // redirect to login page
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {/* Avatar trigger */}
      <Avatar
        sx={{
          width: 30,
          height: 30,
          bgcolor: "#d2a44fff", // nice background color
          color: "#fff", // icon color
          cursor:"pointer"
        }}
        onClick={handleClick}
      >
        <PersonIcon fontSize="small" />
      </Avatar>

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Paper elevation={0} sx={{ p: 1, minWidth: 100 }}>
          <Stack spacing={2} alignItems="center">
            <Box sx={{ display: "flex" }}>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: "#060606ff", // nice background color
                  color: "#fff", // icon color
                }}
              >
                <PersonIcon fontSize="small" />
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "10px", sm: "12px", md: "12px" },
                  p: 1,
                  fontWeight: "bold",
                  color: "#bf2a2aff",
                  textAlign: "center",
                }}
              >
                {adminData?.admin?.email || "Guest User"}
              </Typography>
            </Box>

            <Divider sx={{ width: "100%", my: 1 }} />

            {/* Logout Button */}
            <Button
              variant="contained"
              // color="error"
              onClick={handleLogout}
              sx={{
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "20px",
                px: 3,
                color: "#fff",
              }}
            >
              Logout
            </Button>
          </Stack>
        </Paper>
      </Popover>
    </>
  );
};

export default Profile;

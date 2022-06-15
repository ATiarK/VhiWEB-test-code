import { Typography, Box, TextField } from "@mui/material";
import CustomButton from "./Button";
import LoginIcon from "@mui/icons-material/Login";

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        "& .MuiTextField-root": { m: 0, width: "20rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        <LoginIcon
          sx={{
            fontSize: "2rem",
          }}
        />
        <Typography variant="h5" fontWeight="bold" ml=".5rem">
          Login
        </Typography>
      </Box>
      <TextField id="email" label="Email" variant="outlined" size="small" />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        size="small"
      />
      <CustomButton>Login</CustomButton>
    </Box>
  );
}

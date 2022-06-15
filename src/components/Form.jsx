// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CustomButton from "./Button";
import Box from "@mui/material/Box";

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

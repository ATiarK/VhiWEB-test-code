import { Button } from "@mui/material";
import "../styles/button.scss";

export default function CustomButton({ children }) {
  return <Button variant="contained">{children}</Button>;
}

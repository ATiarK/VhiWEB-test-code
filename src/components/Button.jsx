import { Button } from "@mui/material";
import "../styles/button.scss";

export default function CustomButton(props) {
  const { onClick, children } = props;
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
}

import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function UserCard(props) {
  const { id, avatar, first_name, last_name, email } = props;
  return (
    <Grid container key={id} display="flex" flexDirection="column">
      <Avatar
        src={avatar}
        alt="avatar"
        sx={{
          width: "10rem",
          height: "10rem",
          marginX: "auto",
          marginY: "1rem",
        }}
      />
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={`${first_name} ${last_name}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText secondary={email} />
      </ListItemButton>
    </Grid>
  );
}

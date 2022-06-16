import { ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function ListUserAvatar(props) {
  const { id, avatar, first_name, last_name, email, onClick } = props;
  return (
    <ListItemButton
      key={id}
      alignItems="flex-start"
      onClick={onClick}
      sx={{ backgroundColor: "white" }}
    >
      <ListItemAvatar>
        <Avatar src={avatar} alt="avatar" />
      </ListItemAvatar>
      <ListItemText primary={`${first_name} ${last_name}`} secondary={email} />
    </ListItemButton>
  );
}

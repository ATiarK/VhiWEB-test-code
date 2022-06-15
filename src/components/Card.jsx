import { Avatar, Grid, Typography } from "@mui/material";

export default function Card(props) {
  const { id, avatar, first_name, last_name, email } = props;
  return (
    <Grid container spacing={2} key={id} marginY={1}>
      <Grid item>
        <Avatar
          src={avatar}
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </Grid>
      <Grid item>
        <Typography noWrap fontWeight="fontWeightBold">
          {first_name} {last_name}
        </Typography>
        <Typography noWrap color="textSecondary">
          {email}
        </Typography>
      </Grid>
    </Grid>
  );
}

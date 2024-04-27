import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button, Typography } from "@mui/material";

const UserMenu = () => {
  const dispatch  = useDispatch();
  const user  = useSelector(selectUser);

return (
  <>
    <Typography align="right" >
      Welcome, {user.name}
    </Typography>
    <Button variant='contained' size='small' sx={{ ml: 2 }}
      onClick={() => dispatch(logOut())}>Logout
    </Button>
  </>
  )
}

export default UserMenu;
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const AuthNav = () => {
  return (
    <Typography variant="h6" component="div" >
      <NavLink to="/register" style={{marginRight: 20}}>
        Register
      </NavLink>
      <NavLink to="/login">Log in</NavLink>
    </Typography>
  )
}

export default AuthNav;
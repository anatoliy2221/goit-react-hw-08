import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";


const Navigation = () => {
  
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
      <Typography variant="h6" component="div" direction="row" sx={{ flexGrow: 1}} >
          <NavLink to="/" style={{marginRight: 20}} >Home</NavLink>
            {isLoggedIn && (
          <NavLink to="/contacts">Contacts</NavLink>
        )}
      </Typography>
    )
}

export default Navigation;
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Toolbar, } from "@mui/material";
import  Header from "../header/Header";


const AppBar = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <Header sx={{ flexGrow: 1 }}>
        <Toolbar >
          <Navigation />{isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
    </Header>
    
  )
}

export default AppBar;


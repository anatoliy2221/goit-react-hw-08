import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const AppBar = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);
 
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar;
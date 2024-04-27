import AppBar from '@mui/material/AppBar';

const Header = ({children}) => {
    return <AppBar position="static" style={{ marginBottom: 20}}>
                {children}
            </AppBar>;
};

export default Header;
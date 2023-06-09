import { Face6, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  margin:0
});

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  marginRight: '30px',
  // [theme.breakpoints.up('sm')]: {
  //   display: 'flex',
  // },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  // [theme.breakpoints.up('sm')]: {
  //   display: 'none',
  // },
}));
const Navbar = () => {
  const {user}= useContext(UserContext)

  const [isopen, issetOpen] = useState(false);
  const navigate = useNavigate();
  //   const url=process.env.REACT_APP_BACKEND_URL;
  // console.log(`${url}/assets/${user.picturePath}`);

  return (
    <AppBar position="sticky" sx={{ flexGrow: 1, overflowX: 'hidden' }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          E- Commerce
        </Typography>
        <Face6 sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search bgcolor={'background.default'} color={'text.primary'}>
          <InputBase
            sx={{
              width: '100%',
              color: 'black',
            }}
            placeholder="search..."
          />
          <SearchIcon sx={{ color: 'black' }} />
        </Search>
        <Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Typography variant="h5"> {user.name} </Typography>
          <Button variant="contained">LogOut</Button>
        </Icons>
        <UserBox
          onClick={(e) => issetOpen(true)}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <Typography variant="span">{user.name} </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isopen}
        onClose={(e) => issetOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;

import * as React from 'react';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import { getSelectorIsLoggedIn } from '../../redux/auth/auth-selectors';
import BottomNavigation, { StyledNavLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        value="recents"
        icon={
          <StyledNavLink to="/">
            <HomeIcon />
          </StyledNavLink>
        }
      />
      {isLoggedIn && (
        <BottomNavigationAction
          value="recents"
          icon={
            <StyledNavLink to="/contacts">
              <ContactPhoneSharpIcon />
            </StyledNavLink>
          }
        />
      )}
    </BottomNavigation>
  );
}

export default Navigation;

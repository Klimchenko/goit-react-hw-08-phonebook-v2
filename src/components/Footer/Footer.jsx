import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import {
  FooterContainer,
  Address,
  FooterLogo,
  Title,
  AddressLink,
  AddressItem,
} from './Footer.styled';

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterLogo>
          <VolunteerActivismRoundedIcon sx={{ fontSize: 40 }} />
        </FooterLogo>
        <Address>
          <Title>Address:</Title>
          <ul>
            <AddressItem>Ivano-Frankivsk</AddressItem>
            <AddressItem>
              <AddressLink href="mailto:info@phonebook.com">
                info@phonebook.com
              </AddressLink>
            </AddressItem>
            <AddressItem>
              <AddressLink href="tel:+380967777777">
                +38 096 777 77 77
              </AddressLink>
            </AddressItem>
          </ul>
        </Address>
      </FooterContainer>
    </footer>
  );
}

export default Footer;

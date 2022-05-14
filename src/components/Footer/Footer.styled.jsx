import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin-left: 50px;
  margin-top: 20px;
  
`;

export const Address = styled.address`
  margin-left: 50px;
`;

export const FooterLogo = styled.span`
  border-radius: 50%;
  padding: 3px;
  color: #fff;
  background-color: #9e1111;
  transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    color: #9e1111;
    background-color: #b43bc4;
  }
`;

export const Title = styled.h3`
  font-family: Raleway, sans-serif;
  color: #100733;
  font-size: 14px;
  font-weight: 400;
`;

export const AddressLink = styled.a`
  color: #100733;
  font-size: 12px;
  font-weight: 400;
`;

export const AddressItem = styled.li`
  color: #100733;
  font-family: Raleway, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

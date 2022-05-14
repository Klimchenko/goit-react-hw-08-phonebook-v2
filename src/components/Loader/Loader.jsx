import React from 'react';
import { Hearts } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Hearts color="#b43bc4" height={150} width={150} />
    </Container>
  );
};

export default Loader;

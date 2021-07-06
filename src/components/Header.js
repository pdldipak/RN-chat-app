import React from 'react';
import styled from 'styled-components/native';

const HeaderWrapper = styled.View`
  height: 100;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: #333;
  letter-spacing: 1;
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderText>{title}</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;

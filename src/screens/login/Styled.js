import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const button = styled(Button)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50;
  height: 50;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

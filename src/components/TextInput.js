import React from 'react';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../utils/theme';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  margin-vertical: 12px;
`;

const ErrorText = styled.Text`
  font-size: 14;
  color: ${(props) => props.theme.colors.error};
  padding: 4px;
`;

const TextInputComp = ({ errorText, ...props }) => (
  <Container>
    <Input
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <ErrorText>{errorText}</ErrorText> : null}
  </Container>
);

export default React.memo(TextInputComp);

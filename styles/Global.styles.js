import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: #00cc66;
  /* on IOS StatusBar doesn't need so need this condition */
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`;

export const ViewCenter = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const View = styled.View``;

export const Text = styled.Text`
  color: ${(props) => (props.dark ? 'black' : '#000')};
  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size:20px`;
      case small:
        return `font-size:16px`;
    }
  }}
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
      case heavy:
        return `font-weight:700`;
    }
  }}
`;

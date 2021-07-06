import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import { ThemeProvider } from 'styled-components/native';
import * as G from './styles/Global.styles';
import { theme } from './src/utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <G.SafeArea>
        <StackNavigation />
      </G.SafeArea>
      <ExpoStatusBar
        style="auto"
        barStyle="light-content"
        backgroundColor="#00cc66"
      />
    </ThemeProvider>
  );
}

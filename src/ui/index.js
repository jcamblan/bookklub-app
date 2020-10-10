import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  Text as RnText,
  Button as RnButton,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { material } from 'react-native-typography';
import { DefaultTheme, DarkTheme } from 'react-native-paper';

const { height } = Dimensions.get('window');
export const base = 16;
export const spacing = (input = 1) => `${input * base}px`;

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#343434',
    title: 'black',
    primary: '#D23669',
    secondary: '#F0F0F0',
    ternary: '#707070',
    background: 'white',
    success: '#92C84F',
    warning: '#E6973F',
    textLink: '#48A0E1',
    bottomBar: { background: '#F0F0F0', active: '#222222' },
    highlight: {
      text: 'white',
      background: '#D23669',
      secondary: '#F05286',
      ternary: '#F491B2',
    },
  },
  shadowBox: {
    shadowColor: '#BFBFBF',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
    borderRadius: 15,
    padding: 10,
  },
  spacing,
  material,
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    dark: true,
    mode: 'adaptive',
    light: {
      primary: 'green',
      secondary: 'green',
      ternary: 'green',
      success: 'green',
      warning: 'green',
      textLink: 'green',
    },
    text: '#F0F0F0',
    title: 'white',
    primary: '#D23669',
    secondary: '#222222',
    ternary: '#707070',
    background: '#17181A',
    success: '#92C84F',
    warning: '#E6973F',
    textLink: '#D23669',
    bottomBar: { background: '#222222', active: 'white' },
    highlight: {
      text: 'white',
      background: '#D23669',
      secondary: '#F05286',
      ternary: '#F491B2',
    },
  },
  shadowBox: {
    elevation: 19,
    borderRadius: 15,
    padding: 10,
  },
  spacing,
  material,
};

export const theme = darkTheme;

export const Text = styled(RnText)`
  ${({ theme }) => theme.material.body1};
  color: ${({ theme }) => theme.colors.text};
`;

export const TextLink = ({ title, ...props }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    {...props}
    style={{ paddingVertical: 8 }}
  >
    <TextLinkText>{title}</TextLinkText>
  </TouchableOpacity>
);

export const Button = ({ title, onPress, dark = false }) => {
  const colors = {
    background: dark ? theme.colors.background : theme.colors.text,
    text: dark ? theme.colors.text : theme.colors.background,
  };

  return (
    <TouchableOpacity
      style={{
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: theme.colors.text,
        backgroundColor: colors.background,
        margin: 3,
      }}
      onPress={onPress}
    >
      <Text
        style={{ textAlign: 'center', fontWeight: '500', color: colors.text }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TextLinkText = styled(Text)`
  color: ${({ theme }) => theme.colors.textLink};
`;

export const Title = styled(Text)`
  ${material.display1};

  color: ${({ theme }) => theme.colors.title};
  font-size: 25;
  padding-top: 3;
  padding-bottom: 3;
  font-weight: bold;
`;

export const ShadowBox = ({ children }) => (
  <View style={{ ...theme.shadowBox, backgroundColor: theme.colors.secondary }}>
    {children}
  </View>
);

export const Separator = () => <View style={{ marginVertical: 20 }} />;

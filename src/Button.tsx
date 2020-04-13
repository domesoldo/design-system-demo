import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { Theme } from './themes';

type Color = 'primary' | 'danger';

type Variant = 'solid' | 'outline';

interface ButtonProps {
  color?: Color;
  title: string;
  variant?: Variant;
  size?: 'm' | 's' | 'l';
  fullWidth?: boolean;
}

const Button = ({
  color = 'primary',
  title,
  variant = 'solid',
  size = 'm',
  fullWidth = false,
}: ButtonProps) => {
  const theme: Theme = useContext(ThemeContext);
  console.log('theme: ', theme);
  return (
    <TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: theme.palette
            ? theme.palette.base
            : backgroundColors[variant][color],
          borderColor: theme.palette ? theme.palette.base : borderColors[color],
          borderWidth: 2,
          paddingHorizontal: customSize[size].padding,
          paddingVertical: customSize[size].padding,
          height: customSize[size].height,
          alignSelf: fullWidth ? 'auto' : 'flex-start',
        }}
      >
        <Text
          style={{
            color: theme.palette
              ? theme.palette.light
              : textColors[variant][color],
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const backgroundColors = {
  solid: {
    primary: 'blue',
    danger: 'red',
  },
  outline: {
    primary: 'white',
    danger: 'white',
  },
};

const borderColors = {
  primary: 'blue',
  danger: 'red',
};

const textColors = {
  solid: {
    primary: 'white',
    danger: 'white',
  },
  outline: {
    primary: 'blue',
    danger: 'red',
  },
};

const customSize = {
  s: {
    height: 40,
    padding: 12,
  },
  m: {
    height: 60,
    padding: 16,
  },
  l: {
    height: 80,
    padding: 20,
  },
};

export default Button;

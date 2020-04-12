import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { Theme } from './themes';

type Color = 'primary' | 'danger';

type Variant = 'solid' | 'outline';

const theme: Theme = useContext(ThemeContext);
console.log('theme: ', theme);

interface ButtonProps {
  color?: Color;
  title: string;
  variant?: Variant;
}

export const Button = ({
  color = 'primary',
  title,
  variant = 'solid',
}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: theme ? 'red' : backgroundColors[variant][color],
          borderColor: borderColors[color],
          borderWidth: 2,
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: textColors[variant][color] }}>{title}</Text>
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

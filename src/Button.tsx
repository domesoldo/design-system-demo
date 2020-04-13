import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { Theme } from './themes';

type Color = 'primary' | 'danger';

type Variant = 'solid' | 'outline';

interface ButtonProps {
  color?: Color;
  variant?: Variant;
  size?: 'm' | 's' | 'l';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  variant = 'solid',
  size = 'm',
  fullWidth = false,
  children,
}) => {
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
        {children}
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

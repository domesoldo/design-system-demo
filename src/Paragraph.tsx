import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { Theme } from './themes';

export type FontWeight = 'normal' | 'bold';

interface ParagraphProps {
  align?: 'left' | 'center' | 'right';
  color?: string;
  size?: 'm' | 's' | 'l';
  numberOfLines?: number;
  weight?: FontWeight;
}

const Paragraph: React.FC<ParagraphProps> = ({
  align = 'left',
  children,
  color = 'black',
  size = 'm',
  numberOfLines,
  weight = 'normal',
}) => {
  const theme: Theme = useContext(ThemeContext);
  console.log('theme: ', theme);

  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontWeight: weight,
        fontSize: customSize[size].fontSize,
        lineHeight: customSize[size].lineHeight,
        color: theme.palette ? theme.palette.base : color,
        textAlign: align,
      }}
    >
      {children}
    </Text>
  );
};

const customSize = {
  l: {
    fontSize: 18,
    lineHeight: 24,
  },
  m: {
    fontSize: 16,
    lineHeight: 24,
  },
  s: {
    fontSize: 14,
    lineHeight: 20,
  },
};

export default Paragraph;

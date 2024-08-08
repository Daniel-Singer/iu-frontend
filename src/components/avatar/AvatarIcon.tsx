import { useCallback, useMemo } from 'react';
import classes from './AvatarIcon.module.css';
import { Box, Text } from '@mantine/core';

interface IProps {
  first_name: string;
  last_name: string;
}

const AvatarIcon = ({ first_name, last_name }: IProps) => {
  const colors = [
    'blue',
    'orange',
    'teal',
    'green',
    'red',
    'yellow',
    'lime',
    'cyan',
  ];

  const generateBgColor = useCallback(() => {
    const random = Math.floor(Math.random() * 8);
    return colors[random];
  }, [first_name, last_name]);
  const letters = useMemo(() => {
    const first = first_name.charAt(0).toUpperCase();
    const last = last_name.charAt(0).toUpperCase();
    return `${first}${last}`;
  }, [first_name, last_name]);

  return (
    <Box className={classes.icon} bg={generateBgColor()}>
      <Text size="sm" c="white" fw={800}>
        {letters}
      </Text>
    </Box>
  );
};

export default AvatarIcon;

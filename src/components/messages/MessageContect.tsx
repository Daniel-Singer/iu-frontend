import { Group, Text } from '@mantine/core';
import AvatarIcon from '../avatar/AvatarIcon';
import classes from './MessageContact.module.css';

interface IProps {
  _id?: number;
  first_name: string;
  last_name: string;
}

const MessageContact = (props: IProps) => {
  return (
    <Group className={classes.contact} p="xs">
      <AvatarIcon {...props} />
      <Text size="sm">{`${props.first_name} ${props.last_name}`}</Text>
    </Group>
  );
};

export default MessageContact;

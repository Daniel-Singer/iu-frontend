import { Table, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface IProps {
  courses: ICourseReceive[];
}

const Tbody = ({ courses }: IProps) => {
  const navigate = useNavigate();
  return (
    <Table.Tbody>
      {courses?.map((course) => (
        <Table.Tr
          key={course.id!}
          onDoubleClick={() => navigate(`/courses/${course.id!}`)}
        >
          <Table.Td>{course.id!}</Table.Td>
          <Table.Td>
            <Text size="sm" c="green">
              {course.code}
            </Text>
          </Table.Td>
          <Table.Td>{course.title}</Table.Td>
          <Table.Td>{`${course.tutor.first_name} ${course.tutor.last_name}`}</Table.Td>
          <Table.Td>
            <Text c={course.issues.count < 1 ? 'green' : 'red'} size="sm">
              {course.issues.count}
            </Text>
          </Table.Td>
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};

export default Tbody;

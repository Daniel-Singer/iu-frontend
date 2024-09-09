import { Anchor, Table, Text } from '@mantine/core';
import Status from './Status';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import AdminOrTutorAnchor from '../../components/anchor/AdminOrTutorAnchor';

interface IProps {
  issues: IIssueReceive[] | undefined;
}

const Tbody = ({ issues }: IProps) => {
  const navigate = useNavigate();
  return (
    <Table.Tbody>
      {issues?.map(
        ({ id, title, category, course, status, created_at, updated_at }) => (
          <Table.Tr
            key={`issue${id}`}
            onDoubleClick={() => navigate(`/issue/${id}`)}
          >
            <Table.Td>{id}</Table.Td>
            {course?.code ? (
              <Table.Td>
                <AdminOrTutorAnchor size="sm" path={`/courses/${course.id!}`}>
                  {course?.code!}
                </AdminOrTutorAnchor>
              </Table.Td>
            ) : null}
            <Table.Td>
              <Anchor
                size="sm"
                c="blue"
                onClick={() => navigate(`/issue/${id}`)}
              >
                {title}
              </Anchor>
            </Table.Td>
            <Table.Td>
              <Text c={!category.label ? 'red' : 'default'} size="sm">
                {!category?.label ? 'k.A' : category?.label!}
              </Text>
            </Table.Td>
            <Status {...status} />
            <Table.Td>{dayjs(created_at).format('DD.MM.YYYY')}</Table.Td>
            <Table.Td>{dayjs(updated_at).format('DD.MM.YYYY')}</Table.Td>
          </Table.Tr>
        )
      )}
    </Table.Tbody>
  );
};

export default Tbody;

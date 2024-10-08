import { Anchor, Table, Text, Tooltip } from '@mantine/core';
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
              <Tooltip
                label={course?.active ? 'Kurs Aktiv' : 'Kurs Inaktiv'}
                openDelay={1000}
              >
                <Table.Td>
                  <AdminOrTutorAnchor
                    size="sm"
                    color={course?.active ? 'green' : 'red'}
                    path={`/courses/${course.id!}`}
                  >
                    {course?.code!}
                  </AdminOrTutorAnchor>
                </Table.Td>
              </Tooltip>
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

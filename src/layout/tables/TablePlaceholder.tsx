import { Skeleton } from '@mantine/core';

const TablePlaceholer = () => {
  return (
    <>
      <Skeleton height={30} width="100%"></Skeleton>
      <Skeleton height={30} width="100%"></Skeleton>
      <Skeleton height={30} width="100%"></Skeleton>
    </>
  );
};

export default TablePlaceholer;

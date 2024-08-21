import { Anchor, Table } from '@mantine/core';
import { useModalContext } from '../../context/ModalContext';
import ImageModal from '../../modals/image/ImageModal';
import { useSearchParams } from 'react-router-dom';

interface IProps {
  id: number;
  media_label: string;
}
const ImageColumn = ({ id, media_label }: IProps) => {
  const { toggleModal } = useModalContext();
  const [_, setSearchParams] = useSearchParams();

  const handleImageSelect = () => {
    setSearchParams(`img=${id}`);
    toggleModal();
  };

  return (
    <>
      <ImageModal imgUrl="36" />
      <Table.Td>
        <Anchor onClick={() => handleImageSelect()} size="sm">
          {media_label}
        </Anchor>
      </Table.Td>
    </>
  );
};

export default ImageColumn;

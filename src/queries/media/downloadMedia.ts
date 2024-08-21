import axios from '../../axios';

interface IReturnDownload {
  imgUrl: string;
}

export const downloadMedia = async (id: string): Promise<IReturnDownload> => {
  const { data } = await axios.get(`/api/v1/media/${id}`, {
    responseType: 'blob',
  });

  const imgUrl = URL.createObjectURL(data);

  return {
    imgUrl,
  };
};

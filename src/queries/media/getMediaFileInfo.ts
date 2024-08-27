import axios from '../../axios';

export const getMediaFileInfo = async (id: string): Promise<IMediaFileInfo> => {
  const { data } = await axios.get(`/api/v1/media/information/${id}`);
  return data;
};

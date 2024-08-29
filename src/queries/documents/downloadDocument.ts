import axios from '../../axios';

export const downloadDocument = async (filename: string): Promise<any> => {
  const { data } = await axios.get('/api/v1/documents/pdf', {
    params: {
      filename: filename,
    },
    responseType: 'blob',
  });
  return data;
};

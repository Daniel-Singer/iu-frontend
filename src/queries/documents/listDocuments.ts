import axios from '../../axios';

export const listDocuments = async (): Promise<IDocumentBase[]> => {
  const { data } = await axios.get('/api/v1/documents');
  return data;
};

import axios from '../../axios';

export const listFaqs = async (): Promise<IFaqReceive[]> => {
  const { data } = await axios.get('/api/v1/faqs');
  return data;
};

import axios from '../../axios';

export const listCategories = async (): Promise<ICategoryBase[]> => {
  const { data } = await axios.get(`/api/v1/categories`);
  return data;
};

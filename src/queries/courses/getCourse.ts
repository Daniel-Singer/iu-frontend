import axios from '../../axios';

export const getCourse = async (id: string): Promise<ICourseReceive> => {
  const { data } = await axios.get(`/api/v1/course/${id}`);
  return data;
};

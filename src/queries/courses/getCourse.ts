import axios from '../../axios';

export const getCourse = async (id: string): Promise<ICourseDetailsReceive> => {
  const { data } = await axios.get(`/api/v1/courses/${id}`);
  return data;
};

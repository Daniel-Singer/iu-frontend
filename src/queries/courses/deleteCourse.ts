import axios from '../../axios';

export const deleteCourse = async (id: number): Promise<ICourseReceive> => {
  const { data } = await axios.delete(`/api/v1/courses/${id}`);
  return data;
};

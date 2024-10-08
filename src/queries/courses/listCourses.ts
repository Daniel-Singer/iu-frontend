import axios from '../../axios';

export const listCourses = async (): Promise<ICourseReceive[]> => {
  const { data } = await axios.get('/api/v1/courses');
  return data;
};

import axios from '../../axios';

export const listCourses = async (): Promise<ICourseBase> => {
  const { data } = await axios.get('/api/v1/courses');
  return data;
};

import axios from '../../axios';

export const createCourse = async (
  values: ICourseCreate
): Promise<ICourseReceive> => {
  const { data } = await axios.post(`/api/v1/courses`, values);
  return data;
};

import axios from '../../axios';

interface IArgs {
  id: string;
  update: any;
}

export const updateCourse = async ({
  id,
  update,
}: IArgs): Promise<ICourseReceive> => {
  const { data } = await axios.put(`/api/v1/courses/${id}`, { ...update });
  return data;
};

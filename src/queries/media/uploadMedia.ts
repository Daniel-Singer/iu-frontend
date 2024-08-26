import axios from '../../axios';

interface IArgs {
  id: string;
  attached_file: File;
}

export const uploadMedia = async (values: IArgs): Promise<any> => {
  const { attached_file } = values;
  const { data } = await axios.post(
    `/api/v1/media/issue/${values.id}`,
    {
      attached_file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};

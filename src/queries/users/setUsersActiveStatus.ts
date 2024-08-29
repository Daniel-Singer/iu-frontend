import axios from '../../axios';

interface IActiveResponse {
  active: boolean;
}

export const setUsersActiveStatus = async (
  id: string
): Promise<IActiveResponse> => {
  const { data } = await axios.put(`/api/v1/users/active/${id}`);
  return data;
};

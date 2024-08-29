import axios from '../../axios';

interface IArgs {
  id: string;
  newPassword: string;
  confirmPassword: string;
}

export const resetPassword = async ({
  id,
  newPassword,
  confirmPassword,
}: IArgs) => {
  const { data } = await axios.put(`/api/v1/users/resetpassword/${id}`, {
    newPassword,
    confirmPassword,
  });
  return data;
};

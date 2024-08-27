import axios from '../../axios';
import { TMediaFormValues } from '../../forms/media/context';

export const updateMediaDescription = async (
  values: TMediaFormValues
): Promise<Partial<IIssueBase>> => {
  const { id, ...rest } = values;
  const { data } = await axios.put(`/api/v1/media/description/${id!}`, rest);
  return data;
};

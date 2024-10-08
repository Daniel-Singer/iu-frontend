interface IUserBase {
  id?: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  accessToken?: string;
  active?: boolean;
}

interface IUserCreate extends IUserBase {
  matrikel_nr: string | number;
  cos?: string;
  role: 'student' | 'tutor' | 'admin';
}

interface IUserReceive extends IUserCreate {
  issues_count: number;
  assigned_count: number;
}

interface ITutor extends IUserBase {
  role: 'tutor';
}

interface IAdmin extends IUserBase {
  role: 'admin';
}

type TUserCreate = Omit<IUserBase, 'id' | 'accessToken'> & {
  matrikel_nr: number | null;
  confirmPassword: string;
};

type IMessageUser = Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;

interface IUserBase {
  id?: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  accessToken?: string;
}

interface IStudent extends IUserBase {
  matrikel_nr: string | number;
  cos?: string;
  role: 'student';
}

interface ITutor extends IUserBase {
  role: 'tutor';
}

interface IAdmin extends IUserBase {
  role: 'admin';
}

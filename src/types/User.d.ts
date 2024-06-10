interface IUser {
  id?: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface IStudent extends IUser {
  matrikel_nr: string | number;
  role: 'student';
}

interface ITutor extends IUser {
  role: 'tutor';
}

interface IAdmin extends IUser {
  role: 'admin';
}

interface ICourseBase {
  id?: number;
  code: string;
  title: string;
}

// Interface used when course is created
interface ICourseCreate extends ICourseBase {
  tutor_id: string;
}

// Interface used when course is received from server
interface ICourseReceive extends ICourseBase {
  tutor: Pick<ITutor, 'id' | 'first_name' | 'last_name' | 'email'>;
}

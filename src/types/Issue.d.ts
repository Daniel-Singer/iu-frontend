interface IIssueBase {
  id?: number;
  title: string;
  description: string;
}

interface IIssueCreate extends IIssueBase {
  course_id?: string;
  category_id?: string;
  media_type: string;
  attached_file: any;
}

interface IIssueReceive extends IIssueBase {
  status: IStatusReceive[];
  course: ICourseReceive;
  category: ICategoryBase;
  created_from: Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;
  created_at: Date;
  updated_at: Date;
}

interface IIssueBase {
  id?: number;
  title: string;
  description: string;
}

interface IIssueCreate extends IIssueBase {
  course_id: number | undefined;
  category_id: number | undefined;
  media_type: string;
  attached_file: any;
}

interface IIssueReceive extends IIssueBase {
  status?: any;
  course: ICourseReceive;
  category: ICategoryBase;
  created_from: Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;
  created_at: Date;
  updated_at: Date;
}

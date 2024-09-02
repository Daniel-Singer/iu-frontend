interface IIssueBase {
  id?: number;
  title: string;
  description: string;
}

interface IIssueCreate extends IIssueBase {
  course_id?: string;
  category_id?: string;
  attached_file: any;
  issue_media: IIssueMediaBase;
}

interface IIssueReceive extends IIssueBase {
  status: {
    id: any;
    label: string;
    reason: string | null;
  };
  issue_media: IIssueMediaBase;
  course: ICourseReceive;
  category: ICategoryBase;
  created_from: Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;
  assigned_to: Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;
  created_at: Date;
  updated_at: Date;
}

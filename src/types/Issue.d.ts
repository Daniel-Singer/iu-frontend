interface IIssueBase {
  id?: number;
  title: string;
  description: string;
}

interface IIssueCreate extends IIssueBase {
  course_id: number;
  category_id: number;
}

interface IIssueReceive extends IIssueBase {
  course: ICourse;
  created_from: number;
  created_at: Date;
  updated_at: Date;
}

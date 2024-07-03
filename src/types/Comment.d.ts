interface ICommentBase {
  id?: number | string;
  text: string;
}

interface ICommentCreate extends ICommentBase {
  issue_id: number;
}

interface ICommentReceive extends ICommentBase {
  created_from: {
    id: number;
    first_name: string;
    last_name: string;
  };
  created_at: Date;
  seen_at: Date | null;
}

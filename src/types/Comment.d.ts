interface ICommentBase {
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
}

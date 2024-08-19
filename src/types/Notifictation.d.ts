interface INotificationBase {
  id?: number;
  subject: string;
  head: string;
  body: string;
  footer: string;
  issue_id: number;
}

interface INotificationCreate extends INotificationBase {
  recipient_id: number;
}

interface INotificationListReceive extends INotificationCreate {
  issue_id: number;
  created_at: Date;
  seen: boolean;
}

interface INotificationReceive extends INotificationBase {
  recipient: Pick<IUserBase, 'id' | 'first_name' | 'last_name'>;
  issue: Pick<IIssueBase, 'id', 'title', 'description'>;
}

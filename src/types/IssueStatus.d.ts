interface IIssueStatusReceive {
  id: number;
  created_from: {
    id: number;
    first_name: string;
    last_name: string;
  };
  status: {
    id: number;
    label: string;
  };
  created_at: Date;
  updated_at: Date;
}

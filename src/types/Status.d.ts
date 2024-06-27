interface IStatusBase {
  id?: number;
  label: any;
  desription: string;
}

interface IStatusReceive extends IStatusBase {
  created_at: Date;
  updated_at: Date;
}

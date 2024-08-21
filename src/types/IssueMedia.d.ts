interface IIssueMediaBase {
  id?: number;
  file_path: string | undefined;
  mimetype: string | undefined;
  page: number | undefined;
  line: number | undefined;
  label: string | undefined;
  timestamp: number | undefined;
  url: string | undefined;
  media_label: string | undefined;
}

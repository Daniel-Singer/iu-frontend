interface IIssueMediaBase {
  id?: number;
  media_type: string | undefined;
  page: number | undefined;
  line: number | undefined;
  label: string | undefined;
  timestamp: number | undefined;
  url: string | undefined;
  chapter: string | undefined;
}

interface IMediaFileInfo {
  id?: number;
  mimetype: string;
  name: string;
  file_path: string;
}

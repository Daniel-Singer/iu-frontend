interface IIssueMediaBase {
  id?: number;
  media_type: string | undefined | null;
  page: number | undefined;
  line: number | undefined;
  label: string | undefined;
  timestamp: string | undefined;
  url: string | undefined;
  chapter: string | undefined;
}

interface IMediaFileInfo {
  id?: number;
  mimetype: string;
  name: string;
  file_path: string;
  created_at: Date | null;
}

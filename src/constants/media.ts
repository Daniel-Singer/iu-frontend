import { ReactNode } from 'react';

interface IMediaType {
  value: string;
  label: string;
  icon?: ReactNode;
}

export const mediaTypes: IMediaType[] = [
  {
    value: 'pdf',
    label: 'Skript/PDF',
  },
  {
    value: 'app',
    label: 'Learning App',
  },
  {
    value: 'video',
    label: 'Video',
  },
  {
    value: 'mycampus',
    label: 'MyCampus',
  },
  {
    value: 'audio',
    label: 'Audio',
  },
];

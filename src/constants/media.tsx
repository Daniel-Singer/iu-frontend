import {
  IconAppWindow,
  IconBrandYoutube,
  IconFileTypePdf,
  IconRadio,
  IconSchool,
} from '@tabler/icons-react';
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

interface IMediaLabel {
  [key: string]: {
    label: string;
    icon: ReactNode;
  };
}

export const mediaLabels: IMediaLabel = {
  pdf: {
    label: 'Skript/PDF',
    icon: <IconFileTypePdf size={16} />,
  },
  app: {
    label: 'Learning App',
    icon: <IconAppWindow size={16} />,
  },
  video: {
    label: 'Video',
    icon: <IconBrandYoutube size={16} />,
  },
  mycampus: {
    label: 'MyCampus',
    icon: <IconSchool size={16} />,
  },
  audio: {
    label: 'Audio',
    icon: <IconRadio size={16} />,
  },
};

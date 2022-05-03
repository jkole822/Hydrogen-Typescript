// React
import {FC} from 'react';

// Components
import {ExternalIcon} from '..';

// Styles
import {LinkStyles} from './styles';

// Types
import {DocsButtonProps} from './types';

export const DocsButton: FC<DocsButtonProps> = ({url, label}) => {
  return (
    <a href={url} target="_blank" className={LinkStyles} rel="noreferrer">
      {label}
      <ExternalIcon />
    </a>
  );
};

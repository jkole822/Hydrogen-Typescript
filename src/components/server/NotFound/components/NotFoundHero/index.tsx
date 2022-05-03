// React
import {FC} from 'react';

// Packages
import {Button} from '@/components/client/Button';

// Styles
import {
  ButtonStyles,
  HeadlineStyles,
  InnerContainerStyles,
  OuterContainerStyles,
  ParagraphStyles,
} from './styles';

export const NotFoundHero: FC = () => {
  return (
    <div className={OuterContainerStyles}>
      <div className={InnerContainerStyles}>
        <h1 className={HeadlineStyles}>We&#39;ve lost this page</h1>
        <p className={ParagraphStyles}>
          We couldn’t find the page you’re looking for. Try checking the URL or
          heading back to the home page.
        </p>
        {/* @ts-ignore */}
        <Button
          className={ButtonStyles}
          url="/"
          label="Take me to the home page"
        />
      </div>
    </div>
  );
};

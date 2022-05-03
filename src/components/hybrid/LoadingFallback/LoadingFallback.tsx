// React
import {FC} from 'react';

// Components
import {CartIcon} from '@/components/hybrid/CartIcon';
import {OpenIcon} from '@/components/hybrid/OpenIcon';

// Styles
import {
  HeaderStyles,
  ContainerOneStyles,
  ContainerTwoStyles,
  ContainerThreeStyles,
  ContainerFourStyles,
  OpenIconContainer,
  ParagraphStyles,
} from './styles';

/**
 * A shared component and Suspense call that's used in `App.server.jsx` to let your app wait for code to load while declaring a loading state
 */
export const LoadingFallback: FC = () => {
  return (
    <header className={HeaderStyles}>
      <div className={ContainerOneStyles}>
        <div className={ContainerTwoStyles}>
          <div className={ContainerThreeStyles}>
            <div className={ContainerFourStyles} />
            <div className={OpenIconContainer}>
              <OpenIcon />
            </div>
            <p className={ParagraphStyles}>Snowdevil</p>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

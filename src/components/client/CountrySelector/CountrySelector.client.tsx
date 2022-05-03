// React
import {FC, useState, Suspense} from 'react';

// Packages
import {useCountry} from '@shopify/hydrogen/client';
import {Listbox} from '@headlessui/react';

// Components
import {ArrowIcon, Countries} from './components';
import {SpinnerIcon} from '@/components/client/SpinnerIcon';

// Styles
import {
  ButtonStyles,
  CountriesStyle,
  InnerContainerStyles,
  ListBoxOptionsStyles,
  ListBoxOptionStyles,
  OuterContainerStyles,
  SpanStyles,
  SuspenseStyles,
} from './styles';

/**
 * A client component that selects the appropriate country to display for products on a website
 */
export const CountrySelector: FC = () => {
  const [listboxOpen, setListboxOpen] = useState(false);

  const [selectedCountry, setSelectedCountry] = useCountry();

  return (
    <div className={OuterContainerStyles}>
      <Listbox
        //@ts-ignore
        onChange={setSelectedCountry}
      >
        {({open}) => {
          setTimeout(() => setListboxOpen(open));
          return (
            <>
              <Listbox.Button className={ButtonStyles}>
                <span className={SpanStyles}>{selectedCountry?.name}</span>
                <ArrowIcon isOpen={open} />
              </Listbox.Button>

              <Listbox.Options className={ListBoxOptionsStyles}>
                <div className={InnerContainerStyles}>
                  <Listbox.Option
                    disabled
                    className={ListBoxOptionStyles}
                    value=""
                  >
                    Country
                  </Listbox.Option>
                  {listboxOpen && (
                    <Suspense
                      fallback={
                        <div className={SuspenseStyles}>
                          <SpinnerIcon />
                        </div>
                      }
                    >
                      <Countries
                        selectedCountry={selectedCountry}
                        getClassName={CountriesStyle}
                      />
                    </Suspense>
                  )}
                </div>
              </Listbox.Options>
            </>
          );
        }}
      </Listbox>
    </div>
  );
};

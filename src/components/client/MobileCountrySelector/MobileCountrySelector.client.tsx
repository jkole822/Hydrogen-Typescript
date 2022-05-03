// React
import {FC, useState, Suspense} from 'react';

// Packages
import {useCountry} from '@shopify/hydrogen/client';
import {Listbox} from '@headlessui/react';

// Components
import {SpinnerIcon} from '@/components/client/SpinnerIcon';
import {ArrowIcon, Countries} from '@/components/client/CountrySelector';

// Styles
import {
  ButtonStyles,
  CountriesStyles,
  ListboxOptionsStyles,
  ListboxOptionStyles,
  OuterContainerStyles,
  SuspenseStyles,
} from './styles';

/**
 * A client component that selects the appropriate country to display for products on a mobile storefront
 */
export const MobileCountrySelector: FC = () => {
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
                {selectedCountry?.name}
                <ArrowIcon isOpen={open} />
              </Listbox.Button>
              <Listbox.Options className={ListboxOptionsStyles}>
                <Listbox.Option
                  disabled
                  className={ListboxOptionStyles}
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
                      getClassName={(active: boolean) =>
                        CountriesStyles(active)
                      }
                    />
                  </Suspense>
                )}
              </Listbox.Options>
            </>
          );
        }}
      </Listbox>
    </div>
  );
};

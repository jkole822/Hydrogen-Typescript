// React
import {FC} from 'react';

// Packages
import {fetchSync} from '@shopify/hydrogen/client';
import {Listbox} from '@headlessui/react';

// Components
import {CheckIcon} from '..';

// Types
import {CountriesProps} from './types';

export const Countries: FC<CountriesProps> = ({
  selectedCountry,
  getClassName,
}) => {
  const countries = fetchSync('/countries').json();

  return countries.map((country: any) => {
    const isSelected = country.isoCode === selectedCountry.isoCode;
    return (
      <Listbox.Option key={country.isoCode} value={country}>
        {({active}) => (
          <div className={getClassName(active)}>
            {country.name}
            {isSelected ? <CheckIcon /> : null}
          </div>
        )}
      </Listbox.Option>
    );
  });
};

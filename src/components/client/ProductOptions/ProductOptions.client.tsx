// React
import {FC} from 'react';

// Packages
import {useProduct} from '@shopify/hydrogen/client';

// Styles
import {
  LegendStyles,
  FieldSetStyles,
  OuterContainerStyles,
  SrOnlyStyles,
  InnerContainerStyles,
} from './styles';

/**
 * A client component that tracks a selected variant and/or selling plan state, as well as callbacks for modifying the state
 */
export const ProductOptions: FC = () => {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  return (
    <>
      {options?.map(({name, values}) => {
        return (
          <fieldset key={name} className={FieldSetStyles}>
            <legend className={LegendStyles}>{name}</legend>
            <div className={OuterContainerStyles}>
              {values.map((value) => {
                const checked = selectedOptions?.[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className={SrOnlyStyles}
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() =>
                        setSelectedOption && setSelectedOption(name, value)
                      }
                    />
                    <div className={InnerContainerStyles(checked)}>{value}</div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </>
  );
};

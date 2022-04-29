export const DefaultStyles = `
  block 
  m-0 
  w-full 
  items-center 
  justify-center 
  uppercase 
  font-medium 
  text-center 
  px-6 
  py-4 
  rounded 
  disabled:border-gray-300 
  disabled:bg-gray-300 
  disabled:cursor-not-allowed`;

export const VariantStyles = {
  primary: `
  text-white 
  bg-gray-900 
  hover:bg-gray-800 
  active:bg-gray-700`,
  secondary: `
  bg-white 
  hover:bg-gray-50 
  active:bg-gray-100 
  border 
  border-black`,
};

export const PrimaryButtonStyles = `${DefaultStyles} ${VariantStyles.primary}`;
export const SecondaryButtonStyles = `${DefaultStyles} ${VariantStyles.secondary}`;

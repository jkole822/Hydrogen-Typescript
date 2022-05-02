export const OuterContainerStyles = `
    mt-8 
    rounded 
    border 
    border-gray-200 
    w-full
`;

export const ButtonStyles = `
    w-full 
    flex 
    justify-between 
    text-sm 
    items-center 
    py-5 
    px-7
`;

export const ListboxOptionsStyles = `
    w-full 
    px-3 
    pb-2 
    text-lg 
    overflow-y-auto 
    h-64
`;

export const ListboxOptionStyles = `
    font-medium 
    px-4
    pb-4
    w-full
    text-left
    uppercase
`;

export const SuspenseStyles = `
    flex 
    justify-center
`;

export const CountriesStyles = (active: boolean) => `
    py-2 
    px-4 
    rounded 
    flex 
    justify-between 
    items-center 
    text-left
    w-full 
    cursor-pointer
    ${active ? 'bg-gray-100' : null}
`;

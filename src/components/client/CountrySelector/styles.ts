export const OuterContainerStyles = `
    hidden 
    lg:block
`;

export const ButtonStyles = `
    font-medium 
    text-sm 
    h-8 
    p-2 
    flex 
    items-center
`;

export const CountriesStyle = (active: boolean) => `
    w-36 
    py-2 
    px-3 
    flex 
    justify-between 
    items-center 
    text-left 
    cursor-pointer
    rounded 
    ${active ? 'bg-gray-200' : null}
`;

export const SpanStyles = `
    mr-4
`;

export const ListBoxOptionsStyles = `
    absolute 
    z-10 
    mt-2
`;

export const ListBoxOptionStyles = `
    p-2 
    text-md
    text-left
    font-medium 
    uppercase
`;

export const InnerContainerStyles = `
    bg-white 
    p-4 
    rounded-lg 
    drop-shadow-2xl 
    overflow-y-auto 
    h-64
`;

export const SuspenseStyles = `
    flex 
    justify-center
`;

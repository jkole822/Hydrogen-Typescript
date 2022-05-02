export const LegendStyles = `
    mb-4 
    text-xl 
    font-medium 
    text-gray-900
`;

export const FieldSetStyles = `
    mt-8
`;

export const OuterContainerStyles = `
    flex 
    items-center 
    flex-wrap 
    gap-4
`;

export const SrOnlyStyles = `
    sr-only
`;

export const InnerContainerStyles = (checked: boolean) => `
    p-2 
    border 
    cursor-pointer 
    rounded 
    text-sm 
    md:text-md 
    ${checked ? 'bg-gray-900 text-white' : 'text-gray-900'}
`;

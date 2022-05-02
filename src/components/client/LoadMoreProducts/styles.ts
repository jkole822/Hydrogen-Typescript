export const ButtonStyles = (pending: boolean) => `
    uppercase 
    border-4 
    bg-white 
    border-black 
    text-black 
    text-center 
    px-5 
    py-3 
    font-mono 
    font-bold 
    drop-shadow-lg 
    active:drop-shadow-none 
    hover:bg-black 
    hover:text-white 
    hover:border-white 
    ${pending ? 'opacity-50' : undefined}
`;

export const OuterContainerStyles = `
    flex 
    justify-center 
    h-14
`;

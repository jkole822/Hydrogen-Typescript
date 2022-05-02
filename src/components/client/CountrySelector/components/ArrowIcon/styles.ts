export const SvgStyles = (isOpen: boolean) => `
    transition-transform 
    duration-300 
    ${isOpen ? 'rotate-180' : null}
`;

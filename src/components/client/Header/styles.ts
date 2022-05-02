export const HeaderStyles = `
    h-20
    lg:h-32
`;

export const OuterContainerStyles = (isMobileNavOpen: boolean) => `
    fixed 
    z-20 
    h-20 
    lg:h-32 
    w-full 
    border-b 
    border-gray-200 
    px-6 md:px-8 
    md:py-6 
    lg:pt-8 
    lg:pb-0 
    mx-auto 
    bg-white ${isMobileNavOpen ? '' : 'bg-opacity-95'}
`;

export const InnerContainerStyles = `
    h-full 
    flex 
    lg:flex-col 
    place-content-between
`;

export const ContentWrapper = `
    text-center 
    w-full 
    flex 
    justify-between 
    items-center
`;

export const LinkStyles = `
    font-black 
    uppercase 
    text-3xl 
    tracking-widest
`;

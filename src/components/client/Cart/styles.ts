export const OuterContainerStyles = (isCartOpen?: boolean) =>
  `z-20 
    fixed 
    top-0 
    bottom-0 
    left-0 
    right-0 
    bg-black 
    transition-opacity 
    duration-400 
    ${isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'}`;

export const DialogOverlayStyles = `
    fixed 
    z-20 
    inset-0 
    bg-gray-50 
    opacity-75
`;

export const InnerContainerStyles = (totalQuantity: number) =>
  `absolute 
    flex 
    flex-col 
    md:block 
    z-20 
    top-0 
    left-0 
    right-0 
    bottom-0 
    md:top-7 
    h-full 
    md:left-auto 
    md:right-7 
    md:bottom-auto 
    md:h-auto 
    md:max-h-[calc(100vh-56px)] 
    bg-gray-50 
    w-full 
    md:w-[470px] 
    rounded-b-lg 
    shadow-2xl 
    ${totalQuantity === 0 ? 'overflow-hidden' : 'overflow-y-scroll'}`;

export const OuterContainerStyles = `relative`;

export const InnerContainerStyles = (totalQuantity: number) =>
  `bg-blue-700 
    text-xs 
    rounded-full 
    leading-none 
    text-white 
    absolute 
    bottom-3 
    right-1 
    flex 
    items-center 
    justify-center 
    transform 
    translate-y-1/2
    transition-all 
    ${totalQuantity > 0 ? 'h-4 w-4' : 'h-0 w-0 overflow-hidden'}
`;

export const SrOnlyStyles = `sr-only`;

import { useMediaQuery } from '@mantine/hooks';

export const useIsMedium = () => useMediaQuery('(min-width: 600px)');
export const useIsLarge = () => useMediaQuery('(min-width: 1200px');
export const useIsHuge = () => useMediaQuery('(min-width: 1440px)');

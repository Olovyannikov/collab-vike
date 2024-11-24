import { memo, type SVGProps } from 'react';

export const IconCheck = memo((props: SVGProps<SVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 256 256'>
        <path d='m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z'></path>
    </svg>
));

IconCheck.displayName = 'IconCheck';

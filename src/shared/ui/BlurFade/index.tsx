import { type PropsWithChildren, useMemo, useRef } from 'react';
import { AnimatePresence, motion, useInView, type UseInViewOptions, type Variants } from 'framer-motion';

interface BlurFadeProps {
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    blur?: string;
}

export const BlurFade = ({
    children,
    className,
    variant,
    duration = 0.4,
    delay = 0,
    yOffset = 6,
    inView = false,
    inViewMargin = '-50px',
    blur = '6px',
}: PropsWithChildren<BlurFadeProps>) => {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = useMemo(
        () => ({
            hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
            visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
        }),
        [yOffset, blur]
    );
    const combinedVariants = variant || defaultVariants;

    const transition = useMemo(
        () => ({
            duration,
            ease: 'easeOut',
            delay: 0.04 + delay,
        }),
        [delay, duration]
    );

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                exit='hidden'
                initial='hidden'
                className={className}
                transition={transition}
                variants={combinedVariants}
                animate={isInView ? 'visible' : 'hidden'}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

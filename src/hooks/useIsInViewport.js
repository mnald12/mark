import { useRef, useEffect, useState } from 'react'

const useIsInViewport = (ref) => {

    const [isOnScreen, setIsOnScreen] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const ioConfiguration = {
            /**
             * This rootMargin creates a horizontal line vertically centered
             * that will help trigger an intersection at that the very point.
             */
            rootMargin: '-50% 0% -50% 0%',

            /**
             * This is the default so you could remove it.
             * I just wanted to leave it here to make it more explicit
             * as this threshold is the only one that works with the above
             * rootMargin
             */
            threshold: 0
        };
        observerRef.current = new IntersectionObserver(([entry]) =>
            setIsOnScreen(entry.isIntersecting), ioConfiguration
        );
    }, []);

    useEffect(() => {
        observerRef.current.observe(ref.current);

        return () => {
            observerRef.current.disconnect();
        };
    }, [ref]);

    return isOnScreen
}

export { useIsInViewport }
// @ts-nocheck
import { render, useEffect, useLayoutEffect, useRef } from '../vendor/preact-htm.js';

export function BodyPortal({ children, className = '' }) {
    const hostRef = useRef(null);

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;
        const host = document.createElement('div');
        if (className) host.className = className;
        document.body.appendChild(host);
        hostRef.current = host;
        return () => {
            try {
                render(null, host);
            } finally {
                host.remove();
                if (hostRef.current === host) hostRef.current = null;
            }
        };
    }, [className]);

    useLayoutEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        render(children, host);
        return () => {
            render(null, host);
        };
    }, [children]);

    return null;
}

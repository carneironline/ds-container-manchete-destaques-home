const isBrowser = typeof window !== 'undefined';

export function isMobile(): boolean {
    if (!isBrowser) return false;
    return window.innerWidth < 767;
}

export function onResizeChange(callback: (isMobile: boolean) => void): () => void {
    if (!isBrowser) return () => {};

    callback(isMobile());

    const handleResize = () => callback(isMobile());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}

import { useComponentContext } from '../context/ComponentContext';
import { HighlightImage } from '../types/highlight.types';

export function useThumborUrl() {
    const { filters, tenantId } = useComponentContext();

    return (img: HighlightImage | undefined, width: number | string, height: number | string): string => {
        const w = typeof width === 'number' ? width : parseInt(width, 10);
        const h = typeof height === 'number' ? height : parseInt(height, 10);

        return (
            filters?.thumborUrl(img?.url ?? '', { width: w, height: h, tenantId, crop: img?.crop }) ||
            img?.url ||
            ''
        );
    };
}

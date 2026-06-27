import { Filters } from '@/types';
import { Highlights } from '@/types/highlight.types';

export interface LayoutVariantProps {
    componentClass?: string;
    data?: Highlights;
    filters?: Filters;
    tenantId?: string;
}

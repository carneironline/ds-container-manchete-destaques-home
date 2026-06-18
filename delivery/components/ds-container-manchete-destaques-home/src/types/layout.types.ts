import { Filters } from '../types';
import { Highlights } from './highlight.types';

export interface LayoutVariantProps {
    componentClass?: string;
    data?: Highlights;
    filters?: Filters;
    tenantId?: string;
}

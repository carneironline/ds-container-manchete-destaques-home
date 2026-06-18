import { Highlights } from '../types/highlight.types';

export interface ComponentBody {
    highlights?: Highlights;
    selectedOptionSavedId?: number;
}

interface Block {
    data: {
        componentBody: ComponentBody;
        type: string;
    };
    from: string;
    id: string;
    type: string;
}

interface ApiContent {
    resource?: {
        bodyData?: {
            blocks?: Block[];
        };
    };
}

interface Context {
    api_content?: ApiContent;
    [key: string]: unknown;
}

export function getComponentBody(
    context: Context | undefined,
    type: string,
): ComponentBody | undefined {
    const blocks = context?.api_content?.resource?.bodyData?.blocks;

    if (!blocks) return undefined;

    return blocks.find((block) => block.data?.type === type)?.data?.componentBody;
}

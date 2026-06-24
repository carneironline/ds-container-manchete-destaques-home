interface ImageCrop {
    aspect: number;
    bottom: number;
    left: number;
    right: number;
    top: number;
}

export interface HighlightImage {
    crop: ImageCrop;
    height: number;
    isAnimated: boolean;
    thumborUrl?: string;
    type: string;
    url: string;
    width: number;
}

export interface Highlight {
    hat: string;
    img: HighlightImage;
    img2: HighlightImage;
    isBrandedContent: boolean;
    subtitle: string;
    title: string;
    url: string;
}

export type Highlights = Record<string, Highlight>;

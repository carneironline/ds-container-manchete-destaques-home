interface LayoutVariant1Props {
    componentClass?: string;
}

export function LayoutVariant1({ componentClass }: LayoutVariant1Props) {
    return <div className={`${componentClass} is-variant-1`}>Variant 1</div>;
}

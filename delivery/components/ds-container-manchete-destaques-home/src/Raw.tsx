interface RawProps {
  context: Record<string, any>;
  ScopeComponent: (props: Record<string, any>) => Promise<Record<string, any>>;
}

interface RawReturnType {
  [key: string]: unknown;
}

const Raw = async ({
  context,
  ScopeComponent,
}: RawProps): Promise<RawReturnType> => {
  // const componentRawData = await ScopeComponent({ scope: "scope" });

  return {
    // ...componentRawData,
  };
};

export default Raw;

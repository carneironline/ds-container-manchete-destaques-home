export interface Filters {
  channelUrl: (url: string, channel: "amp" | "raw") => string;
  videoThumbUrl: (videoId: string, size: string) => string;
  thumborUrl: (
    url: string,
    options: {
      crop?: { left: number; right: number; bottom: number; top: number };
      filters?: string;
      tenantId?: string;
      width?: number;
      height?: number;
    },
  ) => string;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: unknown;
}

export interface ShortLink {
  original_link: string;
  full_short_link: string;
}

export interface ImageAPI {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
}

export interface SearchResultApi {
  total: number;
  total_pages: number;
  results: ImageAPI[];
}

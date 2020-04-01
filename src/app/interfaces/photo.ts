export interface IPhoto {
  id: string;
  created_at: string;
  alt_description: string;
  urls: {
    regular: string,
    thumb: string,
    small: string
  };
  user: { id: string, name: string };
}

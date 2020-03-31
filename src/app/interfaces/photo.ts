export interface IPhoto {
  id: string;
  created_at: string;
  alt_description: string;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  };
  user: { id: string, name: string };
}

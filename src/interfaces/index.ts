// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: number;
} & Omit<ContentEssentials, 'published_at'>

export type ContentEssentials = {
  id: number;
  created_at: string;
  updated_at: string;
  published_at: string;
}

export type ImageFormat = {
  ext: string;
  hash: string;
  height: number;
  width: number;
  mime: string;
  name: string;
  size: number;
  url: string;
}

export type ImageData = {
  name: string;
  mime: string;
  url: string;
  ext: string;
  caption: string;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  height: number;
  provider: string;
  size: number;
} & Omit<ContentEssentials, 'published_at'>;

export type Category = {
  name: string;
  slug: string;  
} & ContentEssentials;

export type Post = {
  title: string;
  post: string;
  slug: string;
  image: ImageData[];
  category: Category;
  user: User;
} & ContentEssentials;
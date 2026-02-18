export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface AdminLoginResponse {
  token: string;
  username: string;
}

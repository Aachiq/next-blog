export interface ICategory {
  id: number;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  content: string;
  id_category: number;
  image?: string;
}

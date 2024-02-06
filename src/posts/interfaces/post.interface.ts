export interface Post {
  id: string;
  title: String;
  content: String;
  image: String;
  dateOfCreation: String;
  dateOfModification: String;
  likes: Number;
  views: Number;
  comments: any[];
}

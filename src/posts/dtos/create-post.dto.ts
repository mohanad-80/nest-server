export class CreatePostDto {
  id: string;
  title: string;
  content: string;
  image: string;
  dateOfCreation: string;
  dateOfModification: String;
  likes: number;
  views: number;
  comments: [];
}

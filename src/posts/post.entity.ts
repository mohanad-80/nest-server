import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Comment as CommentI } from "./interfaces/comment.interface";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: String;

  @Column()
  content: String;

  @Column()
  image: String;

  @Column()
  dateOfCreation: String;

  @Column({ default: "" })
  dateOfModification: String;

  @Column()
  likes: Number;

  @Column()
  views: Number;

  @Column({ type: "json" })
  comments: Array<CommentI>;

  @BeforeInsert()
  setDefaultValues() {
    if (!this.comments) {
      this.comments = [];
    }
  }
}

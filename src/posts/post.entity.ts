import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./comment.entity";

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

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @BeforeInsert()
  setDefaultValues() {
    if (!this.comments) {
      this.comments = [];
    }
  }
}

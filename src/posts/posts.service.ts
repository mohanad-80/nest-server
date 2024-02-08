import { Injectable } from "@nestjs/common";
import { Post } from "./interfaces/post.interface";
import { UpdateCommentsDto } from "./dtos/update-comments.dto";
import { CreatePostDto } from "./dtos/create-post.dto";
import { EditPostDto } from "./dtos/edit-post.dto";

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  findAll() {
    return this.posts;
  }

  create(post: CreatePostDto) {
    // this.posts.push(post);
  }

  // Partial<Post> or EditPostDto?
  edit(post: EditPostDto) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == post.id) {
        this.posts[i] = {
          ...this.posts[i],
          ...post,
        };
        return;
      }
    }
  }

  findOne(id: string) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        return this.posts[i];
      }
    }
  }

  addComment(id: string, comment: UpdateCommentsDto) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        this.posts[i].comments.push(comment);
        return;
      }
    }
  }

  updateLikes(id: string, likes: number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        this.posts[i].likes = likes;
        return;
      }
    }
  }

  delete(id: string) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        this.posts.splice(i, 1);
        return;
      }
    }
  }
}

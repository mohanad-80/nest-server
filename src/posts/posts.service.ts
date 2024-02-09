import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCommentsDto } from "./dtos/update-comments.dto";
import { CreatePostDto } from "./dtos/create-post.dto";
import { EditPostDto } from "./dtos/edit-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Post as PostE } from "./post.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostsService {
  constructor(@InjectRepository(PostE) private postsRepo: Repository<PostE>) {}

  async findAll(): Promise<PostE[]> {
    const posts = await this.postsRepo.find();
    return posts;
  }

  async create(post: CreatePostDto): Promise<void> {
    const newPost = this.postsRepo.create(post);
    await this.postsRepo.save(newPost);
  }

  async edit(post: EditPostDto): Promise<void> {
    await this.postsRepo.update({ id: post.id }, post);
  }

  async findOne(id: string): Promise<PostE | null> {
    let post = await this.postsRepo.findOneBy({ id });
    if (!post) {
      throw new NotFoundException("Post not found");
    } 
    return post;
  }

  async addComment(id: string, comment: UpdateCommentsDto): Promise<void> {
    const post = await this.postsRepo.findOneBy({ id });
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    post.comments.push(comment);
    await this.postsRepo.save(post);
  }

  async updateLikes(id: string, likes: number): Promise<void> {
    const post = await this.postsRepo.findOneBy({ id });
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    post.likes = likes;
    await this.postsRepo.save(post);
  }

  async delete(id: string): Promise<void> {
    await this.postsRepo.delete({ id });
  }
}

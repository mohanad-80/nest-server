import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { EditPostDto } from "./dtos/edit-post.dto";
import { UpdateCommentsDto } from "./dtos/update-comments.dto";
import { UpdateLikesDto } from "./dtos/update-likes.dto";
import { PostsService } from "./posts.service";
import { Post as PostI } from "./interfaces/post.interface";

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get("posts")
  async findAll(): Promise<PostI[]> {
    return this.postsService.findAll();
  }

  @Post("posts")
  async create(@Body() createPostDto: CreatePostDto) {
    this.postsService.create(createPostDto);
  }

  @Patch("posts")
  async edit(@Body() editPostDto: EditPostDto) {
    this.postsService.edit(editPostDto);
  }

  @Get("post/:id")
  async findOne(@Param("id") id: string): Promise<PostI> {
    return this.postsService.findOne(id);
  }

  @Post("post/:id")
  async addComment(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentsDto,
  ) {
    this.postsService.addComment(id, updateCommentDto);
  }

  @Patch("post/:id")
  async updateLikes(
    @Param("id") id: string,
    @Body() updatelikesDto: UpdateLikesDto,
  ) {
    // this.updateLikes(id, updatelikesDto.likes);
  }

  @Delete("post/:id")
  async deletePost(@Param("id") id: string) {
    this.postsService.delete(id);
  }
}

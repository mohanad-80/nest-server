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

@Controller()
export class PostsController {
  @Get("posts")
  findAll(): string {
    return "this method returns all posts";
  }

  @Post("posts")
  create(@Body() createPostDto: CreatePostDto): string {
    return "this method creates a post";
  }

  @Patch("posts")
  edit(@Body() editPostDto: EditPostDto): string {
    return "this method edits a post";
  }

  @Get("post/:id")
  findOne(@Param("id") id: string): string {
    return `this method returns the post with id ${id}`;
  }

  @Post("post/:id")
  addComment(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentsDto,
  ): string {
    return `this method add new comment to the post with id ${id}`;
  }

  @Patch("post/:id")
  updateLikes(
    @Param("id") id: string,
    @Body() updatelikesDto: UpdateLikesDto,
  ): string {
    return `this method updates the likes of the post with id ${id}`;
  }

  @Delete("post/:id")
  deletePost(@Param("id") id: string): string {
    return `this method deletes the post with id ${id}`;
  }
}

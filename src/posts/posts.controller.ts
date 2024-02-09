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

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get("posts")
  findAll() {
    return this.postsService.findAll();
  }

  @Post("posts")
  create(@Body() createPostDto: CreatePostDto) {
    this.postsService.create(createPostDto);
  }

  @Patch("posts")
  edit(@Body() editPostDto: EditPostDto) {
    this.postsService.edit(editPostDto);
  }

  @Get("post/:id")
  findOne(@Param("id") id: string) {
    return this.postsService.findOne(id);
  }

  @Post("post/:id")
  addComment(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentsDto,
  ) {
    this.postsService.addComment(id, updateCommentDto);
  }

  @Patch("post/:id")
  updateLikes(@Param("id") id: string, @Body() updatelikesDto: UpdateLikesDto) {
    this.postsService.updateLikes(id, updatelikesDto.likes);
  }

  @Delete("post/:id")
  deletePost(@Param("id") id: string) {
    this.postsService.delete(id);
  }
}

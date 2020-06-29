import { Controller, Post, Body, NotFoundException, Param, Get, Put, Query, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogPostDTO } from './dto/create-blog-post.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('post')
  async addPost(@Body() createBlogPostDto: CreateBlogPostDTO) {
    const newPost = await this.blogService.addPost(createBlogPostDto);
    return ({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  @Put('edit')
  async editPost(@Query('postId') postId, @Body() createBlogPostDto: CreateBlogPostDTO) {
    const editedPost = await this.blogService.editPost(postId, createBlogPostDto);

    if(!editedPost) {
      throw new NotFoundException('Post does not exist!');
    }

    return ({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  @Delete('delete')
  async deletePost(@Query('postId') postId) {
    const deletedPost = await this.blogService.deletePost(postId);

    if(!deletedPost) {
      throw new NotFoundException('Post does not exist!');
    }

    return {
      message: 'Post has been deleted!',
      post: deletedPost,
    }
  }

  @Get('post/:postId')
  async getPost(@Param('postId') postId) {
    const post = await this.blogService.getPost(postId);

    if(!post) {
      throw new NotFoundException('Post does not exist!');
    }

    return post;
  }

  @Get('posts')
  async getPosts() {
    const posts = await this.blogService.getPosts();
    return posts;
  }
}

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { BlogPost } from './schemas/blog-post.schema';
import { CreateBlogPostDTO } from './dto/create-blog-post.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('BlogPost') private readonly blogPostModel: Model<BlogPost>,
  ) {}

  async addPost(createBlogPostDTO: CreateBlogPostDTO): Promise<BlogPost> {
    const newPost = await this.blogPostModel(createBlogPostDTO);
    return newPost.save();
  }

  async getPost(postId): Promise<BlogPost> {
    const post = await this.blogPostModel.findById(postId).exec();
    return post;
  }

  async getPosts(): Promise<BlogPost[]> {
    const posts = await this.blogPostModel.find().exec();
    return posts;
  }

  async editPost(postId, createBlogPostDTO: CreateBlogPostDTO): Promise<BlogPost> {
    const editedPost = await this.blogPostModel.findByIdAndUpdate(
      postId,
      createBlogPostDTO,
      { new: true },
    );
    return editedPost;
  }

  async deletePost(postId): Promise<any> {
    const deletedPost = await this.blogPostModel.findByIdAndRemove(postId);
    return deletedPost;
  }
}

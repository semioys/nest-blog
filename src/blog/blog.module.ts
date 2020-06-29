import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPost, BlogPostSchema } from './schemas/blog-post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BlogPost.name, schema: BlogPostSchema }]),
  ],
  providers: [BlogService],
})
export class BlogModule {}

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BlogPost extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  body_text: string;

  @Prop()
  author: string;

  @Prop()
  date_posted: string;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);

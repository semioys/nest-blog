import { Document } from 'mongoose';

export interface BlogPost extends Document {
  readonly title: string;
  readonly description: string;
  readonly body_text: string;
  readonly author: string;
  readonly date_posted: string;
}
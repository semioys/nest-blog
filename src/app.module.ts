import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest-blog:yB4tNmbLWwkH41uz@mongocluster.qmu9a.mongodb.net/nest-blog?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

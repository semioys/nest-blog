import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest-blog:yB4tNmbLWwkH41uz@mongocluster.qmu9a.mongodb.net/nest-blog?retryWrites=true&w=majority',
      {
        useNewUrlParser: true
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

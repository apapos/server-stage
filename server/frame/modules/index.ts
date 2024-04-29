import { Module } from '@nestjs/common';
import { AppController } from '@controller';
import { AppService } from '@service';
import { TMDBModule } from './tmdb'

@Module({
  imports: [TMDBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

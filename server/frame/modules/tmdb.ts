import { Module } from '@nestjs/common';
import { TMDBController } from '@controller';
import { TMDBService } from '@service';
import { HttpModule } from '@nestjs/axios'
@Module({
  imports: [HttpModule],
  controllers: [TMDBController],
  providers: [TMDBService],
})
export class TMDBModule { }

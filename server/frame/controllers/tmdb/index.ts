import { Controller, Get, Req,Query } from '@nestjs/common';
import { TMDBService } from '@service';
@Controller('/tmdb')
export class TMDBController {
    constructor(private readonly appService: TMDBService) { }

    @Get('/*')
    getTMDB(@Req() req, @Query() query) {
        return this.appService.getTMDB(req, query);
    }

}

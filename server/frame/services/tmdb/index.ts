import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService, } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Observable, map, catchError } from 'rxjs';
import { useConfig } from '@hook';

@Injectable()
export class TMDBService {
  constructor(private readonly httpService: HttpService) { }
  getTMDB(req, param): Observable<AxiosResponse<any[]>> {
    const { path } = req
    const { base_url, params } = useConfig(param)

    return this.httpService.get(`${base_url}${path}`, { params }).pipe(
      map((res) => res.data),
    )
      .pipe(
        catchError((err) => {
          throw new ForbiddenException(err);
        }),
      );
  }
}

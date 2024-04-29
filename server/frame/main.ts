import { NestFactory } from '@nestjs/core';
import { AppModule } from '@module';
import { HttpInterceptor } from '@interceptor/http.interceptor';
import { HttpFilter } from "@filter/http.filter";
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new HttpFilter())
  app.useGlobalInterceptors(new HttpInterceptor())
  await app.listen(5600)
}
bootstrap();

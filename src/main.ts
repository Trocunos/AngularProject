import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  
 // app.use((req, res, next)=>{
    app.enableCors();
  //  res.header("Access-Control-Allow-Origin", "*")
    //next();
//  })
  await app.listen(3000);
}
bootstrap();

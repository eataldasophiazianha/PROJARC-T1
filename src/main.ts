import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: getCors(),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Sales API')
    .setDescription('Essa API descreve as operações do sistema de vendas.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/docs',
    apiReference({
      theme: 'alternate',
      darkMode: true,
      layout: 'modern',
      spec: {
        content: document,
      },
    }),
  );

  function getCors(): string | string[] {
    const cors = process.env.CORS || 'https://hml.visionsafeway.com.br';
    return cors === '*' ? '*' : cors.split(',');
  }

  await app.listen(process.env.PORT ?? 3000);

  console.info(
    `Server is running on http://localhost:${process.env.PORT ?? 3000}`,
  );

  console.info(
    `Scalar(OpenAPI) is running on http://localhost:${process.env.PORT || 3000}/docs`,
  );
}
bootstrap();

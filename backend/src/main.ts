import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import mongoose from "mongoose";

async function bootstrap() {
  mongoose.set("debug", true);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["*"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 8001);
}
void bootstrap();

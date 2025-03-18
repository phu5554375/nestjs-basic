import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { HbsAdapter } from '@nestjs/platform-express/adapters/hbs.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async(configService: ConfigService) => ({
      uri: configService.get<string>('MONGOO_URL'),
    }),
    inject: [ConfigService],
  }) ,
   ConfigModule.forRoot({
    isGlobal :true
   }),
   UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} // ✅ Đảm bảo module được export 
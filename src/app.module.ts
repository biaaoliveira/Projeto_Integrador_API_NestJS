import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Logitech1',
      database: 'db_projeto',
      entities: [Postagem, Tema],
      synchronize: true
    }),
    /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl:{
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
      synchronize: true
    }),*/
    PostagemModule,
    TemaModule
    
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

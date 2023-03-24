import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { CommonModule } from './common/common.module';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
        
    CommonModule,
    
    ChatGptModule
  
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { ChatGptController } from './chat-gpt.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ChatGptController],
  providers: [ChatGptService],
  imports: [
    ConfigModule
  ]
})
export class ChatGptModule {}

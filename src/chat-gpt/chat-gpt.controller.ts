import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ChatGptService } from './chat-gpt.service';
import { ChatDto } from './dto/chat.dto';


@ApiTags('Chat-GPT')
@Controller('chat-gpt')
// Con la siguiente linea decimos que se debe estar autenticado para todas las rutas del controlador
// @Auth()
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  // @Auth()
  @Post()
  generateResponse(@Body() chatDto: ChatDto) {
    return this.chatGptService.generateResponse(chatDto);
  }
}

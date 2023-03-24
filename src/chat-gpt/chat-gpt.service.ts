import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { ChatDto } from './dto/chat.dto';

@Injectable()
export class ChatGptService {

  private readonly logger = new Logger('Chat');
  
  constructor() {}


  //These arrays are to maintain the history of the conversation
  private conversationContext = [];
  private currentMessages = [];


  async generateResponse(chatDto: ChatDto){

    // OpenAIApi required config
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // OpenAIApi required config
    const openai = new OpenAIApi(configuration);

    try {
      const { prompt } = chatDto;
      const modelId = "gpt-3.5-turbo-0301";
      // const modelId = "gpt-4";
      const promptText = `${prompt}\n\nResponse:`;
  
      // Restore the previous context
      for (const [inputText, responseText] of this.conversationContext) {
        this.currentMessages.push({ role: "user", content: inputText });
        this.currentMessages.push({ role: "assistant", content: responseText });
      }
  
      // Stores the new message
      this.currentMessages.push({ role: "user", content: promptText });
  
      const result = await openai.createChatCompletion({
        model: modelId,
        messages: this.currentMessages,
      });
  
      const responseText = result.data.choices.shift().message.content;
      this.conversationContext.push([promptText, responseText]);
      
      return { response: responseText };

    } catch (err) {
      this.logger.error(err);
      throw new InternalServerErrorException(`Unexpected error - Check error log`);      
    }
  }
}

import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async createBook(@Body() body: any,
    @UploadedFile() file: Express.Multer.File,) { 
      return await this.bookService
    }
}

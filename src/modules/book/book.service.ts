import { Injectable } from '@nestjs/common';
import { DbService } from 'src/core/database/database.service';
import { S3Service } from 'src/core/storage/s3/s3.service';

@Injectable()
export class BookService {
    constructor(private prisma: DbService, private s3service = S3Service) { }
    async createBook(file: Express.Multer.File, book: any) {
        const users = await this.prisma.user.create({ data: book })
        const files = await this.s3service.uploadFile(file, 'images')
        const f = await this.prisma.file.create({
            //@ts-ignore
            data: {
                filename: file.filename,
                url: files,
        }})
        return {
            users,files,f
        }
    }
}

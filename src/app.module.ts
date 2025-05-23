import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { BookModule } from './modules/book/book.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CoreModule, BookModule, AuthModule, UsersModule],
  controllers: [],
  providers: []
})
export class AppModule { }

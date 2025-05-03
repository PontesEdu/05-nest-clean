import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [],
  controllers: [AppController, CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}

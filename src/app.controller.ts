import { Controller, Get, Post } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getHello(): string {
    return 'oi'
  }

  @Post('/hello')
  store() {
    return this.prisma.user.findMany()
  }
}

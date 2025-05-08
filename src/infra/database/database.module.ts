import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-comments-repository'
import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-questions-attachment-repository'
import { PrismaAnswerComments } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answer-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerComments,
    PrismaAnswerRepository,
    PrismaAnswerComments,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerComments,
    PrismaAnswerRepository,
    PrismaAnswerComments,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}

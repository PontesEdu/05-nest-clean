import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-questions-attachment-repository'
import { PrismaAnswerComments } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answer-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerComments,
    PrismaAnswerRepository,
    PrismaAnswerComments,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerComments,
    PrismaAnswerRepository,
    PrismaAnswerComments,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}

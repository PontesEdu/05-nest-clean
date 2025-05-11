import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsAttachmentsRepository } from './prisma/repositories/prisma-questions-attachment-repository'
import { PrismaAnswerComments } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answer-repository'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { PrismaStudentsRepository } from './prisma/repositories/prisma-students-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
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
    StudentsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerComments,
    PrismaAnswerRepository,
    PrismaAnswerComments,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}

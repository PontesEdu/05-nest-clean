import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipes'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

// validando caso não venha nada ele retorna 1 nop minimo
const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

type PageQueryParamsSchema = z.infer<typeof pageQueryParamSchema>

const queryValidatitonPipe = new ZodValidationPipe(pageQueryParamSchema)

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(
    @Query('page', queryValidatitonPipe) page: PageQueryParamsSchema, // /questions?page=1
  ) {
    const questions = await this.prisma.question.findMany({
      take: 20, // quantidade de item por pagina
      skip: (page - 1) * 20, // quantos items vai pular
      orderBy: {
        createdAt: 'desc',
      },
    })

    return {
      questions,
    }
  }
}

import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipes'
import { z } from 'zod'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { QuestionPresenter } from '../presenters/question-presenter'

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
  constructor(private fetchRecentQuestion: FetchRecentQuestionsUseCase) {}

  @Get()
  async handle(
    @Query('page', queryValidatitonPipe) page: PageQueryParamsSchema, // /questions?page=1
  ) {
    const result = await this.fetchRecentQuestion.execute({ page })

    if (result.isLeft()) {
      throw new Error()
    }

    const questions = result.value.questions

    return { questions: questions.map(QuestionPresenter.toHttp) }
  }
}

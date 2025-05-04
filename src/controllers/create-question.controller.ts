import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipes'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

const bodyvalidationPipe = new ZodValidationPipe(createQuestionBodySchema)

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(bodyvalidationPipe) body: CreateQuestionBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, content } = body

    const slug = this.convertToSlug(title)

    await this.prisma.question.create({
      data: {
        title,
        content,
        authorId: user.sub,
        slug, // cuidado para cadastrar dois com o mesmo title se nao vai dar erro @unique
      },
    })

    return 'oi'
  }

  convertToSlug(str: string): string {
    return str
      .normalize('NFD') // Separa os acentos das letras
      .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
      .toLowerCase() // Converte para minúsculas
      .trim() // Remove espaços nas extremidades
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove múltiplos hífens seguidos
  }
  // Exemplo de uso:
  // console.log(convertToSlug("Olá, Mundo! Isso é um Teste."));
  // Saída: "ola-mundo-isso-e-um-teste"
}

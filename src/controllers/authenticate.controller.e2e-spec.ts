import { AppModule } from '@/app.module'
import { PrismaService } from '@/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'

describe('Authenticate (E2E)', () => {
  let app: INestApplication
  let prisma: PrismaService

  // esse before serve para subir a aplicação sem ser com start:dev e sim de forma programatica para não ter conflito
  // NÃO usa mais app.server no supertest: request(app.server)
  // e SIM o supertest: request(app.getHttpServer())
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)

    await app.init()
  })

  test('[POST] /sessions', async () => {
    await prisma.user.create({
      data: {
        name: 'eduardo',
        email: 'edu@gmail.com',
        password: await hash('123456', 8),
      },
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: 'edu@gmail.com',
      password: '123456',
    })

    expect(response.body).toEqual({
      access_token: expect.any(String),
    })
  })
})

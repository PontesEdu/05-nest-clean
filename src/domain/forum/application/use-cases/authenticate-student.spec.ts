import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { FakeHasher } from '../../../../../test/cryptography/faker-hasher'
import { AuthenticateStudentUseCase } from './authenticate-student'
import { FakeEncrypter } from 'test/cryptography/fake-encrypter'
import { makeStudent } from 'test/factories/make-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let fakeHashed: FakeHasher
let encrypter: FakeEncrypter
let sut: AuthenticateStudentUseCase

describe('Authenticate Student', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    fakeHashed = new FakeHasher()
    encrypter = new FakeEncrypter()

    sut = new AuthenticateStudentUseCase(
      inMemoryStudentsRepository,
      fakeHashed,
      encrypter,
    )
  })

  it('should be able to Authenticate Student', async () => {
    const student = makeStudent({
      email: 'johndoe@gmail.com',
      password: await fakeHashed.hash('123456'),
    })
    inMemoryStudentsRepository.items.push(student)

    const result = await sut.execute({
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      accessToken: expect.any(String),
    })
  })
})

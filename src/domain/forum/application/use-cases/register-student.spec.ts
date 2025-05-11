import { RegisterStudentUseCase } from './register-student'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { FakeHasher } from './../../../../../test/cryptography/faker-hasher'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let fakeHashed: FakeHasher
let sut: RegisterStudentUseCase

describe('Register Student', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    fakeHashed = new FakeHasher()

    sut = new RegisterStudentUseCase(inMemoryStudentsRepository, fakeHashed)
  })

  it('should be able to register a new student', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      student: inMemoryStudentsRepository.items[0],
    })
  })

  it('should hash student password upon registretion', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    const hashedPassword = await fakeHashed.hash('123456')

    expect(result.isRight()).toBe(true)
    expect(inMemoryStudentsRepository.items[0].password).toEqual(hashedPassword)
  })
})

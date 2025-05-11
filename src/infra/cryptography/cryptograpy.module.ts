import { Module } from '@nestjs/common'
import { JwtEncrypter } from './jwt-encrypter'
import { BcryptHashed } from './bcrypt-hashed'
import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { HasherComparer } from '@/domain/forum/application/cryptography/hasher-comparer'
import { HasherGenerator } from '@/domain/forum/application/cryptography/hasher-generator'

@Module({
  providers: [
    {
      provide: Encrypter,
      useClass: JwtEncrypter,
    },
    {
      provide: HasherComparer,
      useClass: BcryptHashed,
    },
    {
      provide: HasherGenerator,
      useClass: BcryptHashed,
    },
  ],
  exports: [Encrypter, HasherComparer, HasherGenerator],
})
export class CryptographyModule {}

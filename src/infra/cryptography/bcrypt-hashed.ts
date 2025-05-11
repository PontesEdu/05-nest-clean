import { HasherComparer } from '@/domain/forum/application/cryptography/hasher-comparer'
import { HasherGenerator } from '@/domain/forum/application/cryptography/hasher-generator'
import { Injectable } from '@nestjs/common'
import { hash, compare } from 'bcryptjs'

@Injectable()
export class BcryptHashed implements HasherGenerator, HasherComparer {
  async hash(plain: string): Promise<string> {
    return await hash(plain, 8)
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}

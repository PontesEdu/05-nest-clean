import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { CryptographyModule } from './cryptography/cryptograpy.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true, // para todos os modulos usarem
    }),
    AuthModule,
    HttpModule,
    CryptographyModule,
  ],
  controllers: [],
})
export class AppModule {}

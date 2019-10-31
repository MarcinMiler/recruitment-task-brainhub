import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'

import { AppService } from './app.service'
import { databaseOptions } from './config/databaseConfig'

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions)],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

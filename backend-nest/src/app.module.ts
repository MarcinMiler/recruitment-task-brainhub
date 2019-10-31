import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { databaseOptions } from './config/databaseConfig'
import { EventModule } from './modules/event/event.module'

@Module({
    imports: [TypeOrmModule.forRoot(databaseOptions), EventModule]
})
export class AppModule {}

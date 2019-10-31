import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Event } from './event.entity'
import { EventController } from './event.controller'
import { EventService } from './event.service'

@Module({
    imports: [TypeOrmModule.forFeature([Event])],
    controllers: [EventController],
    providers: [EventService]
})
export class EventModule {}

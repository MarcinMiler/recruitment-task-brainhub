import { Injectable, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Event } from './event.entity'
import { NewEventDto } from './dto/new-event.dto'

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event) private readonly eventRepo: Repository<Event>
    ) {}

    async newEvent(event: NewEventDto) {
        try {
            const newEvent = this.eventRepo.create(event)

            await this.eventRepo.save(newEvent)
        } catch (err) {
            throw new BadRequestException('Something went wrong')
        }
    }
}

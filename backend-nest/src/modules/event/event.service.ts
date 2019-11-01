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
        return this.eventRepo.save(event).catch(() => {
            throw new BadRequestException('Something went wrong')
        })
    }
}

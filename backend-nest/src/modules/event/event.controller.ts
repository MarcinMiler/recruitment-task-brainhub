import { Controller, Body, Post } from '@nestjs/common'

import { EventService } from './event.service'
import { NewEventDto } from './dto/new-event.dto'

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post()
    newEvent(@Body() event: NewEventDto) {
        return this.eventService.newEvent(event)
    }
}

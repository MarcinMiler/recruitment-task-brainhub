import { NewEventDto } from '../dto/new-event.dto'
import { Event } from '../event.entity'

export const mockNewEventDto: NewEventDto = {
    firstName: 'John',
    lastName: 'Rink',
    email: 'john@rink.com',
    date: new Date().toISOString()
}

export const mockEvent: Event = {
    id: 1,
    ...mockNewEventDto
}

import { HttpService } from 'common/services/httpService'
import { Event } from './event.model'

export class EventService {
    constructor(private readonly httpService: HttpService) {}

    newEvent(event: Event) {
        return this.httpService.POST<void>('/event', event)
    }
}

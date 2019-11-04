import { HttpService } from 'common/services/httpService'
import { EventService } from 'modules/event/event.service'

export const httpService = new HttpService('http://localhost:4000')
export const eventService = new EventService(httpService)

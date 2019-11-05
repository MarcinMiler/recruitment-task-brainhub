import nanoid from 'nanoid'

import { showNotification } from 'modules/notification/notification.actions'
import { HttpService } from 'common/services/httpService'
import { EventService } from 'modules/event/event.service'
import { NotificationService } from 'common/services/notification'

export const httpService = new HttpService('http://localhost:4000')
export const notificationService = new NotificationService(
    nanoid,
    showNotification
)
export const eventService = new EventService(httpService)

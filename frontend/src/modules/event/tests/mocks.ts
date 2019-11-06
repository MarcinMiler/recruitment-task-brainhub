import { showNotification } from 'modules/notification/notification.actions'
import { NotificationTypes } from 'modules/notification/notification.model'
import { Event } from '../event.model'

export const mockEvent: Event = {
    firstName: 'Marcin',
    lastName: 'Miler',
    email: 'm@m.com',
    date: '11-11-1111'
}

export const mockSucceedNotification = showNotification({
    id: '1',
    title: 'Success',
    type: NotificationTypes.SUCCEED
})

export const mockFailureNotification = showNotification({
    id: '1',
    title: 'Something went wrong',
    type: NotificationTypes.FAILURE
})

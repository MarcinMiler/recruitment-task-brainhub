import nanoid from 'nanoid'

import {
    NotificationTypes,
    CreateNotification
} from 'modules/notification/notification.model'
import { showNotification as showNotificationAction } from 'modules/notification/notification.actions'

export class NotificationService {
    constructor(
        private readonly generateId: typeof nanoid,
        private readonly showNotification: typeof showNotificationAction
    ) {}

    succeedNotification(title: string) {
        const notification = this.createNotification({
            title,
            type: NotificationTypes.SUCCEED
        })

        return this.showNotification(notification)
    }

    failureNotification(errorMessage: string) {
        const notification = this.createNotification({
            title: errorMessage,
            type: NotificationTypes.FAILURE
        })

        return this.showNotification(notification)
    }

    createNotification(notification: CreateNotification) {
        return {
            id: this.generateId(),
            ...notification
        } as const
    }
}

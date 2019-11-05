import * as React from 'react'

import { Notification as NotificationType } from 'modules/notification/notification.model'
import { closeNotification } from 'modules/notification/notification.actions'
import { Notification } from '../Notification'
import { NotificationsWrapper } from './style'

interface Props {
    notifications: NotificationType[]
    closeNotification: typeof closeNotification
}

export const NotificationsList: React.FC<Props> = ({
    notifications,
    closeNotification
}) => (
    <NotificationsWrapper>
        {notifications.map(notification => (
            <Notification
                key={notification.id}
                notification={notification}
                closeNotification={closeNotification}
            />
        ))}
    </NotificationsWrapper>
)

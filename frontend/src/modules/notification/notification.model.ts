export enum NotificationTypes {
    SUCCEED,
    FAILURE
}

export interface Notification {
    id: string
    title: string
    type: NotificationTypes
}

export interface CreateNotification {
    title: string
    type: NotificationTypes
}

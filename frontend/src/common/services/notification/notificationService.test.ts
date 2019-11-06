import * as TypeMoq from 'typemoq'
import nanoid from 'nanoid'

import { showNotification } from 'modules/notification/notification.actions'
import { NotificationTypes } from 'modules/notification/notification.model'
import { NotificationService } from './'

const mockNotification = {
    title: 'title',
    type: NotificationTypes.SUCCEED
}

describe('Notification Service', () => {
    let mockNanoid: TypeMoq.IMock<typeof nanoid>

    beforeEach(() => {
        mockNanoid = TypeMoq.Mock.ofType<typeof nanoid>()
    })

    it('should create notification', () => {
        mockNanoid
            .setup(x => x())
            .returns(() => '1')
            .verifiable()

        const notificationService = new NotificationService(
            mockNanoid.object,
            showNotification
        )

        const notification = notificationService.createNotification(
            mockNotification
        )

        expect(notification).toEqual({ id: '1', ...mockNotification })
        mockNanoid.verifyAll()
    })

    it('should create failure notification', () => {
        mockNanoid
            .setup(x => x())
            .returns(() => '1')
            .verifiable()

        const notificationService = new NotificationService(
            mockNanoid.object,
            showNotification
        )

        const notification = notificationService.failureNotification(
            'Something went wrong'
        )

        expect(notification).toEqual(
            showNotification({
                id: '1',
                title: 'Something went wrong',
                type: NotificationTypes.FAILURE
            })
        )
    })

    it('should create success notification', () => {
        mockNanoid
            .setup(x => x())
            .returns(() => '1')
            .verifiable()

        const notificationService = new NotificationService(
            mockNanoid.object,
            showNotification
        )

        const notification = notificationService.succeedNotification('Success')

        expect(notification).toEqual(
            showNotification({
                id: '1',
                title: 'Success',
                type: NotificationTypes.SUCCEED
            })
        )
    })
})

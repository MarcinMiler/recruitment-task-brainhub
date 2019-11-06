import * as TypeMoq from 'typemoq'
import { of, Subject } from 'rxjs'
import { toArray } from 'rxjs/operators'
import { ActionsObservable, StateObservable } from 'redux-observable'
import * as E from 'fp-ts/lib/Either'

import { NotificationService } from 'common/services/notification'
import { eventEpicFactory } from '../event.epic'
import { EventService } from '../event.service'
import * as actions from '../event.actions'
import {
    mockEvent,
    mockSucceedNotification,
    mockFailureNotification
} from './mocks'

describe('Event epic', () => {
    let mockEventService: TypeMoq.IMock<EventService>
    let mockNotificationService: TypeMoq.IMock<NotificationService>

    beforeEach(() => {
        mockEventService = TypeMoq.Mock.ofType<EventService>()
        mockNotificationService = TypeMoq.Mock.ofType<NotificationService>()
    })

    it('should post new event', done => {
        const mockState = new StateObservable(new Subject(), {})

        mockEventService
            .setup(x => x.newEvent(TypeMoq.It.isObjectWith(mockEvent)))
            // @ts-ignore
            .returns(() => of({}))
            .verifiable()

        mockNotificationService
            .setup(x =>
                x.succeedNotification(
                    TypeMoq.It.isValue('Successfully saved event.')
                )
            )
            .returns(() => mockSucceedNotification)
            .verifiable()

        const eventEpicFactoryInstance = eventEpicFactory(
            mockEventService.object,
            mockNotificationService.object
        )

        const action$ = of(actions.newEventAsync.request(mockEvent))

        eventEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.newEventAsync.success(),
                    mockSucceedNotification
                ])

                mockEventService.verifyAll()
                mockNotificationService.verifyAll()
                done()
            })
    })

    it('should handle error on post new event', done => {
        const mockState = new StateObservable(new Subject(), {})

        mockEventService
            .setup(x => x.newEvent(TypeMoq.It.isObjectWith(mockEvent)))
            .returns(() => of(E.left('Something went wrong')))
            .verifiable()

        mockNotificationService
            .setup(x =>
                x.failureNotification(
                    TypeMoq.It.isValue('Something went wrong')
                )
            )
            .returns(() => mockFailureNotification)
            .verifiable()

        const eventEpicFactoryInstance = eventEpicFactory(
            mockEventService.object,
            mockNotificationService.object
        )

        const action$ = of(actions.newEventAsync.request(mockEvent))

        eventEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        )
            .pipe(toArray())
            .subscribe(res => {
                expect(res).toEqual([
                    actions.newEventAsync.failure('Something went wrong'),
                    mockFailureNotification
                ])

                mockEventService.verifyAll()
                mockNotificationService.verifyAll()
                done()
            })
    })
})

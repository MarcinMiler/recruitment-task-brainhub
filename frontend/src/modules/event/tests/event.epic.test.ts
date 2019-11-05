import * as TypeMoq from 'typemoq'
import { of, Subject } from 'rxjs'
import { ActionsObservable, StateObservable } from 'redux-observable'
import * as E from 'fp-ts/lib/Either'

import { eventEpicFactory } from '../event.epic'
import { EventService } from '../event.service'
import * as actions from '../event.actions'
import { mockEvent } from './mocks'

describe('Event epic', () => {
    let mockEventService: TypeMoq.IMock<EventService>

    beforeEach(() => {
        mockEventService = TypeMoq.Mock.ofType<EventService>()
    })

    it('should post new event', done => {
        const mockState = new StateObservable(new Subject(), {})

        mockEventService
            .setup(x => x.newEvent(TypeMoq.It.isObjectWith(mockEvent)))
            // @ts-ignore
            .returns(() => of({}))
            .verifiable()

        const eventEpicFactoryInstance = eventEpicFactory(
            mockEventService.object
        )

        const action$ = of(actions.newEventAsync.request(mockEvent))

        eventEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(actions.newEventAsync.success())

            mockEventService.verifyAll()
            done()
        })
    })

    it('should handle error on post new event', done => {
        const mockState = new StateObservable(new Subject(), {})

        mockEventService
            .setup(x => x.newEvent(TypeMoq.It.isObjectWith(mockEvent)))
            .returns(() => of(E.left('Something went wrong')))
            .verifiable()

        const eventEpicFactoryInstance = eventEpicFactory(
            mockEventService.object
        )

        const action$ = of(actions.newEventAsync.request(mockEvent))

        eventEpicFactoryInstance(
            new ActionsObservable(action$),
            mockState,
            null
        ).subscribe(res => {
            expect(res).toEqual(
                actions.newEventAsync.failure('Something went wrong')
            )

            mockEventService.verifyAll()
            done()
        })
    })
})

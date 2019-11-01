import * as TypeMoq from 'typemoq'
import { Repository } from 'typeorm'

import { Event } from '../event.entity'
import { EventService } from '../event.service'
import { mockNewEventDto, mockEvent } from './mocks'

describe('Event Service', () => {
    let mockEventRepo: TypeMoq.IMock<Repository<Event>>
    let eventService: EventService

    beforeEach(() => {
        mockEventRepo = TypeMoq.Mock.ofType<Repository<Event>>()
        eventService = new EventService(mockEventRepo.object)
    })

    it('should save event to db', async () => {
        mockEventRepo
            .setup(x => x.save(TypeMoq.It.isObjectWith(mockNewEventDto)))
            .returns(() => Promise.resolve(mockEvent))
            .verifiable()

        const event = await eventService.newEvent(mockNewEventDto)

        expect(event).toEqual(mockEvent)

        mockEventRepo.verifyAll()
    })

    it('should handle error on saving event', async () => {
        mockEventRepo
            .setup(x => x.save(TypeMoq.It.isObjectWith(mockNewEventDto)))
            .returns(() => Promise.reject())
            .verifiable()

        try {
            await eventService.newEvent(mockNewEventDto)
        } catch (err) {
            expect(err.message).toEqual({
                error: 'Bad Request',
                message: 'Something went wrong',
                statusCode: 400
            })

            mockEventRepo.verifyAll()
        }
    })
})

import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import { EventModule } from '../src/modules/event/event.module'
import { Event } from '../src/modules/event/event.entity'
import { mockEvent, mockNewEventDto } from '../src/modules/event/tests/mocks'

describe('Event Controller', () => {
    let app: INestApplication

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [EventModule]
        })
            .overrideProvider(getRepositoryToken(Event))
            .useValue({
                save: () => Promise.resolve(mockEvent)
            })
            .compile()

        app = module.createNestApplication()
        app.useGlobalPipes(new ValidationPipe())
        await app.init()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should post new event', () => {
        return request(app.getHttpServer())
            .post('/event')
            .send(mockNewEventDto)
            .expect(201)
            .expect(mockEvent)
    })

    it('should throw bad request exception on invalid dto', () => {
        return request(app.getHttpServer())
            .post('/event')
            .send({})
            .expect(400)
    })
})

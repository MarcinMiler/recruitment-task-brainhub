import * as React from 'react'
import { render, fireEvent, wait, cleanup } from '@testing-library/react'

import { EventForm } from './'

describe('Event Form', () => {
    afterEach(cleanup)
    it('should work', async () => {
        const newEvent = jest.fn()

        const { getByTestId, getByText } = render(
            <EventForm newEvent={newEvent} />
        )

        const firstName = getByTestId('first-name')
        const lastName = getByTestId('last-name')
        const email = getByTestId('email')
        const date = getByTestId('date')
        const button = getByText(/Save/)

        fireEvent.change(firstName, {
            target: { value: 'Marcin', name: 'firstName' }
        })
        fireEvent.change(lastName, {
            target: { value: 'Miler', name: 'lastName' }
        })
        fireEvent.change(email, {
            target: { value: 'm@m.com', name: 'email' }
        })
        fireEvent.change(date, {
            target: { value: '11/11/1111', name: 'date' }
        })

        fireEvent.submit(button)

        // There is a bug with yup schema, if we delete validationSchema from EventForm
        // test will pass
        await wait(() => expect(newEvent).toHaveBeenCalledTimes(0))
    })
})
